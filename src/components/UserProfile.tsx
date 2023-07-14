import React from "react"
import { useAuthStore } from "Backend/store/store";

const Profile = () => {

    // Link to "Your Profile" from NavBar Menu Button will direct to this page

    const user = useAuthStore((state) => state.user);

    return (
        <div>
            <h1>This will display info about the user and current user state/transactions</h1>
            <h1>{user.name}</h1>
            <h1>{user?.email}</h1>
        </div>
    )
}

export default Profile;