import React, { useState } from 'react';
import { BellIcon } from "@heroicons/react/24/outline";

function NotificationButton() {
  const [showDropdown, setShowDropdown] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 relative">
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white">
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
