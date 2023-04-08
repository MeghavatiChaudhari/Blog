// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAyUB-BToNLuYI464K4dlgSQBdfx1PCXkM",
  authDomain: "blog-30427.firebaseapp.com",
  projectId: "blog-30427",
  storageBucket: "blog-30427.appspot.com",
  messagingSenderId: "422564972209",
  appId: "1:422564972209:web:ead774f7d8158f10e8c490"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();