import database from '../firebase/firebase';

export default ()=>{

  return dispatch=>{
    database.collection('stations').onSnapshot(querySnapshot=>{
      var data=[];
      querySnapshot.forEach(doc=>{
        data.push({id:doc.id,...doc.data()})
      })
    

      dispatch({type:'FETCH_STATIONS',payload:data})
    });

  }
}
