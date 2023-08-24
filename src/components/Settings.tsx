import React from "react";
import { useAuthStore } from "../Backend/store/store";

const Settings = () => {
    const user = useAuthStore((state) => state.user);


    return (
        <div>
            <NavBar />
            <h1>This is where user settings will be.</h1>
            <h1>Hello, {user?.email}</h1>
            <Footer />
        </div>
    )
}

export default Settings;