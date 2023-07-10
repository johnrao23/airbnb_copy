import React from "react";
import { useAuthStore } from "Backend/store/store";

const Payment = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <div>
            <h1>This will display a form to pay for your reservation</h1>
            <h1>Ready to checkout {user?.email}?</h1>
        </div>
    )
}

export default Payment;