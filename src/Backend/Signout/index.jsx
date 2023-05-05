import useStore from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Firebase/firebaseUtils.js";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      logOut();

      await useStore.setState();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <div className="flex justify-center"> */}
      <button
        onClick={() => {
          handleSignOut();
        }}
        // className="bg-white text-black font-bold py-2 px-4 rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
