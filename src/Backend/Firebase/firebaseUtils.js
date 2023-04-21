import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig.js";

const signUpWithEmailAndPassword = async ({ email, password }) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUser = userCredential.user.email;

    // Add user to Firestore
    const user = setDoc(doc(db, `users/${userCredential.user.uid}`), {
      newUser,
    });
    // const newUser = user;
    // await addDoc(usersCollection, newUser);

    return { user };
  } catch (error) {
    return { error };
  }
};

// const signIn = signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user.email;
//     // ...
//     return user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export default signUpWithEmailAndPassword;

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig.js";

// const signUpWithEmailAndPassword = async ({ email, password }) => {
//   try {
//     // // Create user with email and password

//     // TODO: is createUserWithEmailAndPassword the right way to write to firestore with auth?
//     // or is there a different way?
//     const testUser = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     // console.log("testUser: ", testUser);

//     // Add user to Firestore
//     const usersCollection = collection(db, "users");

//     const user = {
//       auth,
//       email,
//       password,
//     };

//     let result = await addDoc(usersCollection, user);
//     console.log("result from adding user to db: ", result);

//     // return { newUser };
//     return null;
//   } catch (error) {
//     return { error };
//   }
// };
