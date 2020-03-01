import * as firebase from "firebase";
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
const fire = firebase.initializeApp(config);
const database = fire.firestore();

export default database;
