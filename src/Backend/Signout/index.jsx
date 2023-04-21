import store from "../store/store.js";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { user, signOut } = store();
  const navigate = useNavigate();

  return (
    user && (
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/");
            {
              signOut;
            }
          }}
          className="bg-white text-black font-bold py-2 px-4 rounded-md"
        >
          Sign Out
        </button>
      </div>
    )
  );
};

export default SignOut;

// import store from "../store/store.js";
// import { useNavigate } from "react-router-dom";

// const SignOut = () => {
//   const { user, signOut } = store();

//   const navigate = useNavigate();

//   return (
//     user && (
//       <button
//         onClick={() => {
//           navigate("/");
//           {
//             signOut;
//           }
//         }}
//       >
//         Sign Out
//       </button>
//     )
//   );
// };

// export default SignOut;
