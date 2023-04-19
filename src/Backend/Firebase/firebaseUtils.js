import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

const signUpWithEmailAndPassword = async ({ email, password }) => {
  try {
    // Create user with email and password
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Add user to Firestore
    const usersCollection = collection(db, "users");
    const newUser = user;
    await addDoc(usersCollection, newUser);

    return { newUser };
  } catch (error) {
    return { error };
  }
};

export default signUpWithEmailAndPassword;
