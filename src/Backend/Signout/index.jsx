import * as React from "react";
import useStore from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Firebase/firebaseUtils.js";

const SignOut = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      logOut();

      await useStore.setState({ user: null });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="block px-4 py-2 text-sm text-gray-700" {...props}>
      <button ref={ref} onClick={handleSignOut} className="w-full text-left">
        Sign Out
      </button>
    </div>
  );
});

export default SignOut;
