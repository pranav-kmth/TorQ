import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD9b2vUWNFT5FDz7Nb1DpKWZ1uDn6WkXY",
    authDomain: "torq-403ed.firebaseapp.com",
    projectId: "torq-403ed",
    storageBucket: "torq-403ed.appspot.com",
    messagingSenderId: "843776015345",
    appId: "1:843776015345:web:b338fa39044586d507e250",
    measurementId: "G-X82W7F3C85"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export const db = firebaseApp.firestore();

  export var provider  = new firebase.auth.GoogleAuthProvider();
