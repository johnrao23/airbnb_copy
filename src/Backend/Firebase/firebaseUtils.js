import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const addUserToFirestore = async (user) => {
  const usersCollectionRef = collection(db, "users");
  await addDoc(usersCollectionRef, user);
};

export default addUserToFirestore;
