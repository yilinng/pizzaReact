import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC42BXLJOGVn8WwiQWb1Rx4MuYQ4nc6Yr8",
    authDomain: "pizza-react-81fd4.firebaseapp.com",
    databaseURL: "https://pizza-react-81fd4.firebaseio.com",
    projectId: "pizza-react-81fd4",
    storageBucket: "pizza-react-81fd4.appspot.com",
    messagingSenderId: "978763825745",
    appId: "1:978763825745:web:b10a1286ca12cae680ae70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;  
