import React, {useState, useEffect} from 'react'
import * as firebase from 'firebase/app';
import db from '../../firebase';

// Initialize Firebase with your configuration details
// const firebaseConfig = {
//   apiKey: "AIzaSyAD3mvL_xqfGDCbwC4M50FjrglGvBdZWxA",
//   authDomain: "fairbnb-5b50b.firebaseapp.com",
//   projectId: "fairbnb-5b50b",
//   storageBucket: "fairbnb-5b50b.appspot.com",
//   messagingSenderId: "686702915592",
//   appId: "1:686702915592:web:544e15a1cb72a2130be1bd",
// };

// firebase.initializeApp(firebaseConfig);


// Reference to the Firestore database
// const db = firebase.firestore();

const Firebase = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch some data from Firestore
    console.log("database: ", db)
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