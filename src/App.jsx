import LocationSearch from "./components/locationSearch";
import Signup from "./Backend/Signup";
import Firebase from "./Backend/firebase";
// @ts-ignore
import BeachImg from "./assets/tropical_main.png";
import SignIn from "./Backend/Signin";
import SignOut from "./Backend/Signout";
import useAuthStore from "./Backend/store/useAuth";

function App() {
  const { user, loading, error } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user ? <SignOut /> : <SignIn />}
      <h1>Fairbnb</h1>
      <h2>A place to get last minute travel deals at a fair price!</h2>
      <div>
        <Signup />
        <LocationSearch />
        <p className="text-red-500">Click to find your next adventure.</p>
      </div>
      <p>Search for the location you want to travel to</p>
      <img src={BeachImg} alt="Beach" />
      <Firebase />
    </div>
  );
}

export default App;
