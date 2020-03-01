import database from '../firebase/firebase';
console.log(database);
export default ()=>{
  return dispatch=>{
    database.collection('buses').onSnapshot(querySnapshot=>{
    var data=[];
  querySnapshot.forEach(doc=>{
    data.push({id:doc.id,...doc.data()})
  });


  dispatch({type:'FETCH_BUSES',payload:data});
});
}}
