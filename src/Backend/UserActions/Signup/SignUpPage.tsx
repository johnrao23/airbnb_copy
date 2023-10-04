import { User } from "firebase/auth";
import { signUp } from "../../Firebase/firebaseUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer"
import dockImg from "../../../assets/dockImg.png"
import palmTrees from "../../../assets/palmTrees.png"

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
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null); // 'success' or 'error'


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
        // If signUp gives a specific error in its result
        setAlertMessage(result.error.message);
        setAlertType('error');
        setLoading(false);
        return;
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
      // If an unexpected error occurs
      setAlertMessage(error.message);
      setAlertType('error');
      setLoading(false);
    }  
  };
  

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="bg-cover bg-no-repeat flex-grow" style={{ backgroundImage: `url(${dockImg})` }}>
        <h1 className="text-4xl font-bold text-orange-500 text-center pt-8 px-4 sm:px-0">
            A place to get last minute travel deals at a fair price!
          </h1>
        <div className="sm:mx-auto sm:w-full sm:max-w-md my-10">
            <img
              className="mx-auto h-20 w-20"
              src={palmTrees}
              alt="Fairbnb"
            />
          </div>
          <div className="max-w-sm mx-auto py-6">
            {alertMessage && (
              <div
                  className={`mx-auto my-4 text-center py-2 text-white w-2/3 md:w-1/2 lg:w-1/3 ${
                      alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
                  } rounded-lg`}
              >
                {alertMessage}
              </div>
            )}
            <div
              className="bg-white bg-opacity-70 px-4 py-6 shadow sm:rounded-lg sm:px-10 space-y-6"
            >
              <h1 className="text-2xl font-bold mb-8 text-center text-orange-500">Sign up</h1>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or Back to{" "}
                <button
                  onClick={() => navigate("/")}
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Sign In
                </button>
              </p>
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
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Sign up"}
                  </button>
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

<h1 className="text-4xl font-bold text-orange-500 text-center my-8 px-4 sm:px-0"></h1>