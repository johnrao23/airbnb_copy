import React, { useState } from "react";
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store"

const Confirmation = () => {
    const user = useAuthStore((state) => state.user);
    const selectedResult = useAuthStore((state) => state.selectedResult);

    // form state
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Congratulations! You are all set. Enjoy your stay!")
        // For now, let's just log the form data.
        console.log({ creditCardNumber, expiryDate, cvv });

        // Here is where you would send the data to your server or payment processor
    };

    return (
        <>
        <NavBar />
        <div className="max-w-md mx-auto">
            <h1 className="text-center text-2xl font-bold my-4">Complete Your Reservation {user?.email}</h1>
            <div className="w-250 h-220 overflow-hidden rounded-lg mb-2">
                <img className="w-full h-full object-cover" src={selectedResult.images[0]} alt="Result" />
            </div>


            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="credit-card" className="sr-only">Credit card number</label>
                        <input id="credit-card" name="credit-card" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Credit card number" value={creditCardNumber} onChange={e => setCreditCardNumber(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="expiry-date" className="sr-only">Expiry date</label>
                        <input id="expiry-date" name="expiry-date" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Expiry date (MM/YY)" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cvv" className="sr-only">CVV</label>
                        <input id="cvv" name="cvv" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        </span>
                        Confirm Reservation
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Confirmation;
