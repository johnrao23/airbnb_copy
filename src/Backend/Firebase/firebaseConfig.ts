import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD3mvL_xqfGDCbwC4M50FjrglGvBdZWxA",
  authDomain: "fairbnb-5b50b.firebaseapp.com",
  projectId: "fairbnb-5b50b",
  storageBucket: "fairbnb-5b50b.appspot.com",
  messagingSenderId: "686702915592",
  appId: "1:686702915592:web:544e15a1cb72a2130be1bd",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

// const user = {
//   name: "ryan added 4/19/23",
//   email: "ryan added 4/19/23@example.com",
//   age: 5000,
// };

// const usersCollection = collection(db, "users");
// const locationCollection = collection(db, "location");

// // Add a document to the "users" collection
// async function addUser(user) {
//   try {
//     const docRef = await addDoc(usersCollection, user);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
