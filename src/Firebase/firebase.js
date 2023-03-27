import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3eT33Q_SPb7SR7D6xwIR2TxbK7POkGes",
  authDomain: "sintiya-1c6be.firebaseapp.com",
  databaseURL: "https://sintiya-1c6be-default-rtdb.firebaseio.com",
  projectId: "sintiya-1c6be",
  storageBucket: "sintiya-1c6be.appspot.com",
  messagingSenderId: "684018452990",
  appId: "1:684018452990:web:1e77487b13ef0512f6d8af",
  measurementId: "G-MFQSX0JL75"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
