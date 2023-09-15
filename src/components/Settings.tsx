import React, { useState } from "react";
import { useAuthStore } from "../Backend/store/store";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Settings = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [userinfo, setUserInfo] = useState(user?.name || "");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
      setUserInfo(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setUser({ ...user, name: userinfo });
      setSubmitted(true);
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
        { !submitted ? (
          <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-6 mt-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>

            <div className="mt-6 space-y-4">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                <div className="mt-4 space-y-4">
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                        Host Comments
                        </label>
                        <p className="text-gray-500">Get notified when a host posts a comment on a saved listing.</p>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                        Openings
                        </label>
                        <p className="text-gray-500">Get notified when a new listing becomes available.</p>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="offers" className="font-medium text-gray-900">
                        Offers
                        </label>
                        <p className="text-gray-500">Get notified with new special offers!</p>
                    </div>
                    </div>
            </div>
        </fieldset>
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div className="mt-4 space-y-4">
            <div className="flex items-center gap-x-3">
                    <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Everything
                    </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                    <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                        Same as email
                    </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                    <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                        No push notifications
                    </label>
                    </div>
                </div>
            </fieldset>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4">
                  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                  </button>
                  <button
                      type="submit"
                      className="rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-200 ease-in-out"
                  >
                      Save
                  </button>
              </div>
              </div>
        </form>
          ) : (
              <h2 className="text-2xl text-gray-800 mb-4">Thank you, {user?.name}</h2>
          )}
      <Footer />
    </div>
  );
};

export default Settings;