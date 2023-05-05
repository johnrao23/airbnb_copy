import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig.js";

const signUp = async ({ email, password }) => {
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

    return user;
  } catch (error) {
    return { error };
  }
};

const signIn = async ({ email, password }) => {
  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Get user object from userCredential
    const user = userCredential.user;

    // Return the user object
    return user;
  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);

    // Return null to indicate sign-in failed
    return null;
  }
};

const user = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

const logOut = async () => {
  await signOut(auth);
};

export { signUp, signIn, user, logOut };
