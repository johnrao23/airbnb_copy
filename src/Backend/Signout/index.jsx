import useAuthStore from "../store/useAuth.js";

const SignOut = () => {
  const { user, signOut } = useAuthStore();

  return user && <button onClick={signOut}>Sign Out</button>;
};

export default SignOut;
