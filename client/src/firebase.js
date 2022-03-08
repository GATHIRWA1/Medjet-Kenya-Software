import firebase from 'firebase/app';
import 'firebase/storage'
require("firebase/firestore");
require("firebase/functions")



var firebaseConfig = {
    apiKey: "AIzaSyBfGTIAKsz9nJjjR0VAkAe6gQMd2_zmRfI",
    authDomain: "medjetkenya.firebaseapp.com",
    projectId: "medjetkenya",
    storageBucket: "medjetkenya.appspot.com",
    messagingSenderId: "254591805780",
    appId: "1:254591805780:web:ec1aa4aab5bef7a5d900c1",
    measurementId: "G-MTSVQVJYSK"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const func = firebase.functions();



export { fb, db, func }