import React from "react";
import { useAuthStore } from "../Backend/store/store";

const Settings = () => {
    const user = useAuthStore((state) => state.user);


    return (
        <div>
            <h1>This is where user settings will be.</h1>
            <h1>Hello, {user?.email}</h1>
        </div>
    )
}

export default Settings;