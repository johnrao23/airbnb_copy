import { User } from "firebase/auth"
import { signIn, googleSignIn, twitterSignIn, githubSignIn, forgotPassword } from "../../Firebase/firebaseUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signin.module.css";
import palmTrees from "./src/assets/palmTrees.png";

interface SignInResult {
  user?: User;
  error?: any;
}

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signInError, setSigninError] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null); // 'success' or 'error'

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
  
    try {
      const result: SignInResult = await signIn({ email, password });
      console.log("result: ", result);
      if (result.error) {
        setSigninError(result.error.message);
        setAlertMessage("Missing Information");
        setAlertType('error');
        setLoading(false);
        return;
      }
  
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.message) {
        setSigninError(error.message);
        setAlertMessage(error.message);
        setAlertType('error');
      } else {
        // handle other errors or set a generic error message
        setSigninError("An error occurred");
        setAlertMessage("An error occurred");
        setAlertType('error');
      }
      setLoading(false);
    }
  };
  

  const handleGoogleSignIn = async () => {
    setLoading(true);
 
    try {
      const result = await googleSignIn();
      console.log("result: ", result);
  
      if (!result || result?.error) {
        const errorMessage = result ? result?.error.message : "An unknown error occurred during sign-in";
        setSigninError(errorMessage);
        setLoading(false);
        return;
      }

      if (result  && result?.user) {
         navigate("/home");
      }
  
    
    } catch (error) {
      console.log(error);
      if (error.message) {
        setSigninError(error.message);
      } else {
        // handle other errors or set a generic error message
        setSigninError("An error occurred");
      }
      setLoading(false);
    }
  }

  const handleTwitterSignIn = async () => {
    setLoading(true);
 
    try {
      const result = await twitterSignIn();
      console.log("result: ", result);
  
      if (!result || result?.error) {
        const errorMessage = result ? result?.error.message : "An unknown error occurred during sign-in";
        setSigninError(errorMessage);
        setLoading(false);
        return;
      }

      if (result  && result?.user) {
         navigate("/home");
      }
  
    
    } catch (error) {
      console.log(error);
      if (error.message) {
        setSigninError(error.message);
      } else {
        // handle other errors or set a generic error message
        setSigninError("An error occurred");
      }
      setLoading(false);
    }
  }

  const handleGithubSignIn = async () => {
    setLoading(true);
 
    try {
      const result = await githubSignIn();
      console.log("result: ", result);
  
      if (!result || result?.error) {
        const errorMessage = result ? result?.error.message : "An unknown error occurred during sign-in";
        setSigninError(errorMessage);
        setLoading(false);
        return;
      }

      if (result  && result?.user) {
         navigate("/home");
      }
  
    
    } catch (error) {
      console.log(error);
      if (error.message) {
        setSigninError(error.message);
      } else {
        // handle other errors or set a generic error message
        setSigninError("An error occurred");
      }
      setLoading(false);
    }
  }


  const handleForgotPassword = (email) => {
    forgotPassword(email)
      .then((response) => {
        if (response.success) {
          setAlertMessage("Check Email");
          setAlertType("success");
        } else {
          const errorMessage = "Must Include Email";
          setAlertMessage(errorMessage);
          setAlertType("error");
        }
      });
  };


  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500 text-center my-8">
        A place to get last minute travel deals at a fair price!
      </h1>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src={palmTrees}
            alt="Fairbnb"
          />
          <h2 className={`mt-6 text-center text-3xl font-bold tracking-tight ${styles.green}`}>
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <button
              onClick={() => navigate("/Sign-Up")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up for a New Account Here
            </button>
          </p>
        </div>
        {alertMessage && (
          <div
            className={`mx-auto my-4 text-center py-2 text-white w-2/3 md:w-1/2 lg:w-1/3 ${
              alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
            } rounded-lg`}
          >
            {alertMessage}
          </div>
        )}
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  // Will need to set up functionality using Firebase Auth ...
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => handleForgotPassword(email)}
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                // type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold"
                onClick={() => handleSubmit()}
              >
                Sign In
              </button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>


                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <button
                      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      onClick={() => handleGoogleSignIn()}
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9.978V14H15.196C14.667 16.328 12.935 18 10.5 18 7.468 18 5 15.532 5 12.5S7.468 7 10.5 7C12.041 7 13.345 7.66 14.11 8.775L16.896 6.082C15.363 4.57 13.296 3.5 10.5 3.5C6.364 3.5 3 6.864 3 11S6.364 18.5 10.5 18.5C15.196 18.5 18.5 14.358 18.5 11.153 18.5 10.384 18.364 9.978 18 9.36H10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>



                  <div>
                    <button
                      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      onClick={() => handleTwitterSignIn()}
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                  </div>


                  <div>
                  <button
                      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      onClick={() => handleGithubSignIn()}
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
