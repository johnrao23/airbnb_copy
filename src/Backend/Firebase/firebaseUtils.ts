import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";
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
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthStore } from "../store/store";

interface ProviderSpecificData {
  twitterUsername?: string;
  githubUsername?: string;
}


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

const extractProviderData = (user) => {
  let providerSpecificData: ProviderSpecificData = {};

  user.providerData.forEach(data => {
    switch (data.providerId) {
      case 'twitter.com':
        providerSpecificData.twitterUsername = data.displayName || user.displayName;
        break;
      case 'github.com':
        providerSpecificData.githubUsername = data.displayName || user.displayName;  // GitHub's might differ, please adjust accordingly after checking.
        break;
      case 'google.com':
        // For Google, we might not need any extra data as we're already getting the user's name and email.
        // But, if there's something specific you want, you can add it here.
        break;
      default:
        break;
    }
  });

  return providerSpecificData;
};


const googleSignIn = async () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const provider = new GoogleAuthProvider();

  if (isMobile) {
    
    try {
      // Initiate sign-in with redirect
      signInWithRedirect(auth, provider);
      return null;
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
      return null;
    } catch (error) {
      console.error("An error occurred during Twitter sign-in", error);
      return { error };  // return error object for error handling if needed
    }
  } else {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const providerData = extractProviderData(user);
      console.log(result.user.providerData);
      // Extract Twitter username and store in zustad

      useAuthStore.setState({
        user: { id: user?.uid, email: user?.email, name: user.displayName, ...providerData },
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
      return null;
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

const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('An error occurred while sending the password reset email', error);
    return { error };
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

export { signUp, signIn, logOut, googleSignIn, twitterSignIn, githubSignIn, extractProviderData, forgotPassword };


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