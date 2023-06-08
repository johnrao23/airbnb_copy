import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useAuthStore } from "../store/store";

const signUp = async ({ email, password }) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Add user to Firestore
    const newUser = userCredential.user.email;
    setDoc(doc(db, `users/${userCredential.user.uid}`), {
      newUser,
    });

    // Get user object from userCredential
    const user = userCredential.user;
    console.log("Registered with uid: ", user.uid);

    // Update global state
    await useAuthStore.setState({
      user: {
        id: user?.uid,
        email: user?.email,
        name: user?.displayName,
      },
      isSignedIn: true,
    });

    // Return the user object
    return { user };
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

    // Update global state
    await useAuthStore.setState({
      user: { id: user?.uid, email: user?.email, name: user.displayName },
      isSignedIn: true,
    });

    // Return the user object
    return { user };
  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);

    // Return null to indicate sign-in failed
    return null;
  }
};

const logOut = async () => {
  try {
    signOut(auth);
    await useAuthStore.setState({ isSignedIn: false, user: null });
  } catch (error) {
    console.log("error", error);
  }
};

export { signUp, signIn, logOut };


// const user = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// };