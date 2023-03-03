// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD3mvL_xqfGDCbwC4M50FjrglGvBdZWxA",
  authDomain: "fairbnb-5b50b.firebaseapp.com",
  projectId: "fairbnb-5b50b",
  storageBucket: "fairbnb-5b50b.appspot.com",
  messagingSenderId: "686702915592",
  appId: "1:686702915592:web:544e15a1cb72a2130be1bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
