import { create } from "zustand";
import user from "../Firebase/firebaseUtils";

const useStore = create((set) => ({
  user: { user },
  setUser: (user) => set({ userData: user }),
}));

export default useStore;
