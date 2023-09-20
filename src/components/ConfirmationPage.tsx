import React, { useState } from "react";
import NavBar from "./NavBar";
import { useAuthStore } from "../Backend/store/store";
import Footer from "./Footer";
import AIButton from "./AskAiButton";
import { Link } from "react-router-dom";

const Confirmation = () => {
    const user = useAuthStore((state) => state.user);
    const selectedResult = useAuthStore((state) => state.selectedResult);
    const [creditCardNumber, setCreditCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [bookingCompleted, setBookingCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ creditCardNumber, expiryDate, cvv });

        // Here is where I would send the data to your server or payment processor

        setBookingCompleted(true);
    };

    return (
        <div>
            <NavBar />
            <h1 className="text-center text-2xl font-bold my-4">Complete Your Reservation {user?.twitterUsername || user?.displayName || user?.email}</h1>
            <div className="border rounded-lg p-4 m-2 flex flex-col items-center justify-between space-y-4 h-full">
                <h2 className="text-2xl mb-2">{selectedResult.name}</h2>
                <div className="w-250 h-220 overflow-hidden rounded-lg mb-2">
                    <img className="w-full h-full object-cover" src={selectedResult.images[0]} alt="Result" />
                </div>
                <p className="mb-2 text-green-500">${selectedResult.price.total}</p>

                {bookingCompleted ? (
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold">Booking Successful!</h2>
                        <p>Thank you for your reservation. Enjoy your stay!</p>
                        <Link to="/home" className="text-blue-500 hover:underline">Go back to Home</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="flex justify-center">
                                <input id="credit-card" name="credit-card" type="text" required className="appearance-none rounded-none relative block w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Credit card number" value={creditCardNumber} onChange={e => setCreditCardNumber(e.target.value)} />
                            </div>
                            <div className="flex justify-center">
                                <input id="expiry-date" name="expiry-date" type="text" required className="appearance-none rounded-none relative block w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Expiry date (MM/YY)" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} />
                            </div>
                            <div className="flex justify-center">
                                <input id="cvv" name="cvv" type="text" required className="appearance-none rounded-none relative block w-1/2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} />
                            </div>
                        </div>
    
                        <div className="flex justify-center">
                            <button type="submit" className="group relative mt-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Confirm Reservation
                            </button>
                        </div>
                        <h2 className="text-red-500 font-bold text-center">***DISCLAIMER: PLEASE DO NOT ENTER ANY PERSONAL INFORMATION. THIS SITE IS FOR LEARNING PURPOSES ONLY!!!***</h2>
                    </form>
                )}
            </div>
            <AIButton />
            <Footer />
        </div>
    )
}

export default Confirmation;