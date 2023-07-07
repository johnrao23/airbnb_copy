import React from "react";
import { useAuthStore } from "../Backend/store/store"

const Reservation = () => {
    const user = useAuthStore((state) => state.user);

    return <h1>Landing Page from Search Result Choices to Book Reservation</h1>
}

export default Reservation;