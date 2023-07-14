import React, { useState } from "react";
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store";

const Profile = () => {

    const user = useAuthStore((state) => state.user);
    const [userinfo, setUserInfo] = useState("")

    // Set up field to store profile info and save it to Application state

    return (
        <div>
            <NavBar />
            <h1>This will display info about the user and current user state/transactions</h1>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
        </div>
    )
}

export default Profile;