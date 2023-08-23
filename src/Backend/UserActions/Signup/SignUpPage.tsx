import { User } from "firebase/auth";
import { signUp } from "../../Firebase/firebaseUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer"
import dockImg from "../../../assets/dockImg.png"

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
      navigate("/home");
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
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="bg-cover bg-no-repeat flex-grow" style={{ backgroundImage: `url(${dockImg})` }}>
        <h1 className="text-4xl font-bold text-orange-500 text-center my-8">
          A place to get last minute travel deals at a fair price!
        </h1>
          <div className="max-w-sm mx-auto py-12">
            <h1 className="text-2xl font-bold mb-8 text-center">Sign up</h1>
            <div
              className="bg-white bg-opacity-60 px-4 py-8 shadow sm:rounded-lg sm:px-10 space-y-6"
            >
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
        </div>
      <Footer />
    </div>
  );
};

export default SignUp;