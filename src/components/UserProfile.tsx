import React, { useState } from "react";
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store";

const Profile = () => {

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const [userinfo, setUserInfo] = useState(user?.name || "")
    const [submitted, setSubmitted] = useState(false)

    const handleNameChange = (event) => {
        setUserInfo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Update the user with the new name
        setUser({ ...user, name: userinfo });
        // Indicate that the form has been submitted
        setSubmitted(true);
    }

    return (
        <div>
           
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-2xl text-gray-800 mb-4">Let us get to know you a little bit, {user?.email}</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 space-y-2 bg-white rounded-xl shadow-md">
                        <div>
                            <label className="block text-gray-700 text-lg font-semibold mb-2">Name:</label>
                            <input className="form-input mt-1 block w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" type="text" value={userinfo} onChange={handleNameChange} />
                        </div>
                        <div>
                            <input type="submit" value="Submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                        </div>
                    </form>
                ) : (
                    <h2 className="text-2xl text-gray-800 mb-4">Thank you, {user?.name}</h2>
                )}
            </div>
        </div>
    )
}

export default Profile;
