import React, {useState, useEffect} from 'react'
import * as firebase from 'firebase/app';
import { getFirestore,collection, getDocs, addDoc } from 'firebase/firestore';
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const user = {
  name: "John",
  email: "john@example.com",
  age: 30,
};

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
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersCollection = collection(db, "users");

// Add a document to the "users" collection
async function addUser(user) {
  try {
    const docRef = await addDoc(usersCollection, user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

addUser(user);



const Firebase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch some data from Firestore
    console.log("database: ", db)
    // Get a reference to the "users" collection
const usersRef = collection(db, 'users');

// Fetch all the documents in the "users" collection
    getDocs(usersRef).then((querySnapshot) => {
      setData(querySnapshot)
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, '=>', doc.data());
  // });
});
    // db.collection('users')
    //   .get()
    //   .then((querySnapshot) => {
    //     const newData = [];
    //     querySnapshot.forEach((doc) => {
    //       newData.push({ id: doc.id, data: doc.data() });
    //     });
    //     setData(newData);
    //   });
  }, []);

  return (

    <>
      <p className='text-red-500'>firebase</p>
      {data.length && <ul>
        {data.map((item) => (
          <li key={item.id}>{item.data.name}</li>
        ))}
      </ul>}
      </>
  )
}

export default Firebase