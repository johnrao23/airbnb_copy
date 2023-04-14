import store from "../store/store.js";

const SignOut = () => {
  const { user, signOut } = store();

  return user && <button onClick={signOut}>Sign Out</button>;
};

export default SignOut;
