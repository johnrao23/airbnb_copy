import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    // ..
  });

const addUserToFirestore = async (user) => {
  const usersCollectionRef = collection(db, "users");
  const result = await addDoc(usersCollectionRef, user);
  return result;
};

export { addUserToFirestore };
// const addUserToFirestore = async (userData) => {
//   try {
//     await db.collection('users').doc(userData.uid).set(userData)
//   } catch (error) {
//     console.log(error)
//   }
// }

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebaseConfig.js";

// const signUpWithEmailAndPassword = async ({ email, password, name }) => {
//   try {
//     // Create user with email and password
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     // Add user to Firestore
//     const usersCollection = collection(db, "users");
//     const newUser = { email, password };
//     await addDoc(usersCollection, newUser);

//     return { user };
//   } catch (error) {
//     return { error };
//   }
// };

// export default signUpWithEmailAndPassword;
