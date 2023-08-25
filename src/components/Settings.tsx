import React from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Settings = () => {
    const user = useAuthStore((state) => state.user);


    return (
        <div>
            <NavBar />
            <h1>Hello, {user?.email}</h1>
            <Footer />
        </div>
    )
}

export default Settings;