import db from '../firebase/firebase';
import _ from 'lodash';

export default (id)=>{

  return dispatch=>{



  db.collection('stations')
    .doc(id)
    .get()
    .then(doc=>doc.data().nom)
    .then(nom=>{
      db.collection('lignes')
        .get()
        .then(snap=>{
          var  details=[];
          snap.forEach(doc=>{
            const arrets=doc.data().arrets;
            _.forOwn(arrets,(value,key)=>{
            if(value.station.id===id){
              details.push({
                heure_depart:value.heure_depart,
                nom:doc.data().nom
              });

            }
            if(_.size(arrets)-1==key){
              dispatch({type:'SELECT_STATION',
              payload:{
                nom:nom,  
                details:details
              }
            });
            }

          });
        });
      });

    })





  }
}
