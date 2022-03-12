import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBqueHm6yy0womxCJmLsmergmhNVhuxhfk",
    authDomain: "egdf-51846.firebaseapp.com",
    projectId: "egdf-51846",
    storageBucket: "egdf-51846.appspot.com",
    messagingSenderId: "91097303338",
    appId: "1:91097303338:web:b03fa469a0a9f05bea3653"   
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
export const getFireAuth = () => firebase.auth(app);
