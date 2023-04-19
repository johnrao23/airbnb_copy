import { create } from "zustand";
import newUser from "../Firebase/firebaseUtils";

const useStore = create((set) => ({
  user: { newUser },
  setUser: () => set((state) => ({ user: state.user })),
}));

export default useStore;
