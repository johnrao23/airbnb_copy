import React from "react";
import CraterLake from "../assets/craterLake.png"

const Contact = () => {
    return (
        <div>
            <div 
                className="relative flex-grow bg-cover bg-no-repeat" 
                style={{ 
                backgroundImage: `url(${CraterLake})`,
                }}
            >
            <h1>Need some help? Please feel free to reach out!</h1>
            <h1>support@sameplacebetterprice.com</h1>
            <h1>(800) 555-1234</h1>
            </div>
        </div>
    )
}

export default Contact;