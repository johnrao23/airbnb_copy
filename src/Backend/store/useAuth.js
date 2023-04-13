import { create } from "zustand";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import addUserToFirestore from "../Firebase/firebaseUtils.js";

const useAuth = create((set) => ({
  user: null,
  loading: false,

  async signUp(email, password) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const result = await addUserToFirestore(user);
      console.log("result: ", result);
      set({ user });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAuth;

// const useAuthStore = create((set) => ({
//   user: null,
//   loading: true,
//   error: null,
//   signInWithEmailAndPassword: async (email, password) => {
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(
//         email,
//         password
//       );
//       set({ user: userCredential.user, loading: false, error: null });
//     } catch (error) {
//       set({ user: null, loading: false, error: error.message });
//     }
//   },
//   signOut: async () => {
//     await auth.signOut();
//     set({ user: null, loading: false, error: null });
//   },
// }));

// export default useAuthStore;

// const store = create((set) => ({
//   count: 0,
//   user: null,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   signupUser: async (user) => {
//     // copy over databse code for adding a user from firebaseexample.jsx addUser function
//     // await return
//     // then set user to value   set({ user: some_data })
//   },
// }));

// export default store;
