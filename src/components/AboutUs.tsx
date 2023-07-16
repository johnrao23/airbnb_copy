import React from "react";
import { useAuthStore } from "../Backend/store/store";

const About = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <div>
            <h1>Thanks for asking about us, {user?.email}!</h1>
            <p>Here at Fairbnb, we want to provide you with once in a lifetime opportunites for a much better price!</p>
        </div>
    )
}

export default About;