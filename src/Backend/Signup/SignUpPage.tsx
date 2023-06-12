import { User } from "firebase/auth";
import { signUp } from "../Firebase/firebaseUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpResult {
  user?: User;
  error?: any;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignupError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);

    try {
      const result: SignUpResult = await signUp({ email, password });
   
      if (result.error) {
        setSignupError(JSON.stringify(result?.error.message))
        setLoading(false);
       return 
      }
      navigate("/location-Search");
    } catch (error) {
      // TODO - pass correct result.error here and move if logic down  here 
      console.log(error);
      setSignupError(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      setLoading(false);
     
    }

    setLoading(false);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 text-center my-8">
        Fairbnb, A place to get last minute travel deals at a fair price!
      </h1>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-sm mx-auto py-12">
          <h1 className="text-2xl font-bold mb-8 text-center">Sign up</h1>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleSignUp}
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign up"}
              </button>
            </div>

            <div>
              {signUpError && <p className="text-red-500">{signUpError }</p>}
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;


// import { User } from "firebase/auth";
// import { signUp } from "../Firebase/firebaseUtils";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [user, setUser] = useState({
//   //   email: setEmail(""),
//   //   password: setPassword(""),
//   // });
//   // const [passwordConfirmation, setPasswordConfirmation] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "password") {
//       setPassword(value);
//     }
//   };

//   const handleSignUp = async () => {
//     setLoading(true);
//     // if (password !== passwordConfirmation) {
//     //   alert("Passwords don't match.");
//     //   setLoading(false);
//     //   return;
//     // }
//     try {
//       const result: User | { error: any;} = await signUp({ email, password });
//       console.log("result: ", result)
//       if (result.error) {
//         await navigate("/Location-Search");
//       }
    
//     } catch {
//       (error) => {
//         console.log(error);
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//         setLoading(false);
//         // ..
//       };
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <h1 className="text-4xl font-bold text-blue-500 text-center my-8">
//         Fairbnb, A place to get last minute travel deals at a fair price!
//       </h1>
//       <div className="bg-gray-100 min-h-screen">
//         <div className="max-w-sm mx-auto py-12">
//           <h1 className="text-2xl font-bold mb-8 text-center">Sign up</h1>
//           <form
//             // onSubmit={handleSignUp}
//           >
//             <div className="mb-6">
//               <label htmlFor="email" className="text-lg">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="text-lg">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             {/* <div className="mb-6">
//               <label htmlFor="password" className="text-lg">
//                 Password
//               </label>
//               <input
//                 type="passwordConfirmation"
//                 name="passwordConfirmation"
//                 id="passwordConfirmation"
//                 value={passwordConfirmation}
//                 onChange={(text) => setPasswordConfirmation}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div> */}
//             <div className="flex justify-center items-center">
//               <button
//                 onClick={() => handleSignUp() }
//                 // type="submit"
//                 className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Sign up"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

// const [user, setUser] = useState({
//   email: "",
//   password: "",
// });

// const [isLoading, setIsLoading] = useState(false);
// // const signUp = useStore((state) => state.signUp);

// const handleInputChange = (e) => {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleSignUp = async (event) => {
//   event.preventDefault();
//   setIsLoading;

//   try {
//     signUp(user);

//     await useStore.setState({ setUser });

//     navigate("/Location-Search");
//   } catch (error) {
//     console.log(error);
//   }
// };
