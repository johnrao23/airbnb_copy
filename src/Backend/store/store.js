import { create } from "zustand";
// import user from "../Firebase/firebaseUtils";

const useStore = create((set) => ({
  user: null,
  setUser: () => set((state) => ({ user: state.user })),
}));

export default useStore;
