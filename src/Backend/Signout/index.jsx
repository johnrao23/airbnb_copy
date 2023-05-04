import store from "../store/store.js";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { user, signOut } = store();
  const navigate = useNavigate();

  return (
    user && (
      <div>
        <div className="flex justify-center">
        <button
          onClick={() => {
            {
              signOut;
            }
            navigate("/");
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

// import React from 'react';
// import classNames from 'classnames';

// function SignOut({ active }) {
//   return (
//     <button
//       className={classNames(
//         'block px-4 py-2 text-sm text-gray-700',
//         active ? 'bg-gray-100' : ''
//       )}
//     >
//       Sign out
//     </button>
//   );
// }

// export default SignOut;
