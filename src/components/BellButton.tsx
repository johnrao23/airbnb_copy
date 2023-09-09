import React, { useState, useRef, useEffect } from 'react';
import { BellIcon } from "@heroicons/react/24/outline";

function NotificationButton() {
    const [showDropdown, setShowDropdown] = useState(false);
    const notifications = ['Notifications'];
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Check if clicked on outside of element
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                    <div className="rounded-md ring-1 ring-black ring-opacity-5">
                        {notifications.map((notif, index) => (
                            <div key={index} className="py-2 px-4 hover:bg-gray-200">
                                {notif}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationButton;
