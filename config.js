import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyArgRVQljsBeqVOZDnp-OJiTcl5EfjEl3E",
  authDomain: "biblioteca-eletronica-3.firebaseapp.com",
  projectId: "biblioteca-eletronica-3",
  storageBucket: "biblioteca-eletronica-3.appspot.com",
  messagingSenderId: "378557704713",
  appId: "1:378557704713:web:1d09e997b22d67ad53a6d8",
  measurementId: "G-R1KJ26N7NR"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
