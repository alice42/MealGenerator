import firebase from 'firebase/app'
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyD1qlLIHEloGArKGv5vjlykximOyKk245A",
    authDomain: "mealgenerator-d1b62.firebaseapp.com",
    projectId: "mealgenerator-d1b62",
    storageBucket: "mealgenerator-d1b62.appspot.com",
    messagingSenderId: "230257752200",
    appId: "1:230257752200:web:6ededec38b2d4a73cac73d"
  };
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const recipesRef = databaseRef.child("recipes")
export default firebase;