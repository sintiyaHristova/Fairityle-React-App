import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDwta5gs4MoJXPv9lyLIGc2sC25PS_xeTA",
  authDomain: "my-project-4a5bd.firebaseapp.com",
  projectId: "my-project-4a5bd",
  storageBucket: "my-project-4a5bd.appspot.com",
  messagingSenderId: "147672154053",
  appId: "1:147672154053:web:b6198012a3688e911595ac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;



