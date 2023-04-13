import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addUserToFirestore = async (user) => {
  const usersCollectionRef = collection(db, "users");
  await addDoc(usersCollectionRef, user);
};
