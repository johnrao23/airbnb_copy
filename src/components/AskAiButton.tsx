import React from "react";
import { useNavigate } from "react-router-dom";

const AIButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/askai")
    }

    return (
        <div>
            <button onClick={handleClick}>Ask Ai</button>
        </div>
    )
}

export default AIButton;