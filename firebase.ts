import firebase from 'firebase/app'
import "firebase/database"
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD1qlLIHEloGArKGv5vjlykximOyKk245A",
  authDomain: "mealgenerator-d1b62.firebaseapp.com",
  databaseURL: "https://mealgenerator-d1b62-default-rtdb.firebaseio.com",
  projectId: "mealgenerator-d1b62",
  storageBucket: "mealgenerator-d1b62.appspot.com",
  messagingSenderId: "230257752200",
  appId: "1:230257752200:web:6ededec38b2d4a73cac73d"
  };
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage()
export const databaseRef = firebase.database().ref();
export const recipesRef = databaseRef.child("recipes")
export default firebase;