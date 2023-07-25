import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "./firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
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
    const newUser = {
      email: userCredential.user.email,
      date: Timestamp.fromDate(new Date()),
    };
    setDoc(doc(db, `users/${userCredential.user.uid}`), {
      newUser,
    });

    // Get user object from userCredential
    const user = userCredential.user;
    console.log("Registered with uid: ", user.uid);

    // Update global state
     useAuthStore.setState({
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
     useAuthStore.setState({
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
    return { error };
  }
};

const googleSignIn = async () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const provider = new GoogleAuthProvider();

  if (isMobile) {
    try {
      // Initiate sign-in with redirect
      await signInWithRedirect(auth, provider);

      // Wait for the sign-in process to complete and get the result
      const result = await getRedirectResult(auth);
      
      console.log('getRedirectResult result: ', result); // Add this line

      // Check if the sign-in process completed successfully
      if (result && result.user) {
        // Update the state with the signed-in user's information
        useAuthStore.setState({
          user: { id: result.user.uid, email: result.user.email, name: result.user.displayName },
          isSignedIn: true,
        });

        console.log('Updated State: ', useAuthStore.getState()); // Add this line

        // Return the user object
        return { user: result.user };
      } else {
        // The sign-in process did not complete successfully
        return { error: new Error('The sign-in process did not complete successfully') };
      }
    } catch (error) {
      console.error("An error occurred during Google sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  } else {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log('signInWithPopup result: ', result); // Add this line

      const user = result.user;
      useAuthStore.setState({
        user: { id: user?.uid, email: user?.email, name: user.displayName },
        isSignedIn: true,
      });
      
      console.log('Updated State: ', useAuthStore.getState()); // Add this line

      return { user };  // return user object for further use if needed
    } catch (error) {
      console.error("An error occurred during Google sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  }
}

const twitterSignIn = async () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const provider = new TwitterAuthProvider();

  if (isMobile) {
    try {
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("An error occurred during Twitter sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  } else {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      useAuthStore.setState({
        user: { id: user?.uid, email: user?.email, name: user.displayName },
        isSignedIn: true,
      });
      return { user };  // return user object for further use if needed
    } catch (error) {
      console.error("An error occurred during Twitter sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  }
}

const githubSignIn = async () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const provider = new GithubAuthProvider();

  if (isMobile) {
    try {
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("An error occurred during Github sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  } else {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      useAuthStore.setState({
        user: { id: user?.uid, email: user?.email, name: user.displayName },
        isSignedIn: true,
      });
      return { user };  // return user object for further use if needed
    } catch (error) {
      console.error("An error occurred during Github sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  }
}



const logOut = async () => {
  try {
    signOut(auth);
    await useAuthStore.setState({ isSignedIn: false, user: null });
  } catch (error) {
    console.log("error", error);
  }
};

export { signUp, signIn, logOut, googleSignIn, twitterSignIn, githubSignIn };


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