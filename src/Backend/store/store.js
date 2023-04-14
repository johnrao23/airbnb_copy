import { create } from "zustand";

const useStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export default useStore;

//   async signUp(email, password) {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const result = await addUserToFirestore(user);
//       console.log("result: ", result);
//       set({ user });
//     } catch (error) {
//       console.error(error);
//     }
//   },
// }));
