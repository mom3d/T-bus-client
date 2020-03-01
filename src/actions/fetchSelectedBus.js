import database from '../firebase/firebase';
import _ from 'lodash';
console.log(database);
export default (busId)=>{


  return dispatch=>{


    database.collection('buses')
    .doc(busId)
    .onSnapshot(dataSnapshot=>{
      var   details=[];
      var nom='';
      var incident='';

      var data =dataSnapshot.data()
      if(data===undefined){
        dispatch({type:'SELECT_BUS',payload:{details:details,nom:nom,incident:incident}});
        dispatch({type:'CHANGE_SELECTOR',payload:'nothing'});

        return;
      }
        incident=data.incident;
        return data.ligne.get().then(doc=>{
        nom=doc.data().nom;
        const arrets=doc.data().arrets;
      _.forOwn(arrets,(value,key)=>{
        value.station.get().then(doc=>{
          details.push({heure:value.heure_depart,station:doc.data()})
          console.log(_.size(arrets));
          console.log(key);
          if(_.size(arrets)-1==key){
              dispatch({type:'SELECT_BUS',payload:{details:details,nom:nom,incident:incident}});
          }

        })
      })
    });

      // doc.data().arrets.forEach(stop=>{
      // return stop.station.get().then(doc=>{
      //   details.push({heure:stop.heure_depart,station:doc.data()})
      // })
      // })
    })
  }
}
