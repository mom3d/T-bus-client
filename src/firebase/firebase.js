import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCUY7tJxxqz7dlJSS_U0tEm79lqDh_WkUU",
    authDomain: "tunibus-fcd6c.firebaseapp.com",
    databaseURL: "https://tunibus-fcd6c.firebaseio.com",
    projectId: "tunibus-fcd6c",
    storageBucket: "tunibus-fcd6c.appspot.com",
    messagingSenderId: "894240329201"
  };
const fire=  firebase.initializeApp(config);
const database=fire.firestore();

export default database;
