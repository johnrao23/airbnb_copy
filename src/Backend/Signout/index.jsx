import store from "../store/store.js";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { user, signOut } = store();
  const navigate = useNavigate();

  return (
    user && (
      <div>
        {/* <div className="flex justify-center"> */}
        <button
          onClick={() => {
            {
              signOut;
            }
            navigate("/");
          }}
          // className="bg-white text-black font-bold py-2 px-4 rounded-md"
        >
          Sign Out
        </button>
      </div>
    )
  );
};

export default SignOut;
