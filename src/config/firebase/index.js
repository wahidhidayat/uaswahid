import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD6MPvwu84bubmYJGLKS-BO_ZPGpf876rY",
    authDomain: "uaswahid-ba5e7.firebaseapp.com",
    databaseURL: "https://uaswahid-ba5e7.firebaseio.com",
    projectId: "uaswahid-ba5e7",
    storageBucket: "uaswahid-ba5e7.appspot.com",
    messagingSenderId: "940322932590",
    appId: "1:940322932590:web:2effc287319a893ddaa37f",
    measurementId: "G-2EJBL8FGFX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const database = firebase.database();
  //firebase.analytics();
  export default firebase;