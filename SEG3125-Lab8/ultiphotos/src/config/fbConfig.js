import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXevJ2Gn0bZ2RmbvdL7Sw0HZDwGaH-hi8",
    authDomain: "the-ultimate-photos.firebaseapp.com",
    databaseURL: "https://the-ultimate-photos.firebaseio.com",
    projectId: "the-ultimate-photos",
    storageBucket: "the-ultimate-photos.appspot.com",
    messagingSenderId: "956207377095",
    appId: "1:956207377095:web:dc65ca59b9100e22632ce2",
    measurementId: "G-T4RDT66MLS"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;