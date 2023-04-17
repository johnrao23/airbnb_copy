import { create } from "zustand";
import { addUserToFirestore } from "../Firebase/firebaseUtils";

const user = 

const useStore = create((set) => ({
  userData: {
    uid: user.uid,
    email: user.email,
    name: user.displayName || "",
    password: user.password,
  },
  setUserData: (data) => set({ userData: data }),
}));

export default useStore;
