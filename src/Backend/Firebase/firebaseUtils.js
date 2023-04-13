import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const addUserToFirestore = async (user) => {
  const usersCollectionRef = collection(db, "users");
  const result = await addDoc(usersCollectionRef, user);
  return result;
};

export default addUserToFirestore;
