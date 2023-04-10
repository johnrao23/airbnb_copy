import useAuthStore from "../../store/useAuthStore.js";

const SignOut = () => {
  const { user, signOut } = useAuthStore();

  return user && <button onClick={signOut}>Sign Out</button>;
};

export default SignOut;
