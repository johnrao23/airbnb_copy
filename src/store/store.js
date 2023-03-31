import { create } from "zustand";

const store = create((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  signupUser: async (user) => {
    // copy over databse code for adding a user from firebaseexample.jsx addUser function
    // await return
    // then set user to value   set({ user: some_data })
  },
}));

export default store;
