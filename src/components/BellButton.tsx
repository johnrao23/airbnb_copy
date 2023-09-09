import React, { useState } from 'react';

function NotificationButton() {
  const [showDropdown, setShowDropdown] = useState(false);
  const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  return (
    <div className="relative">
      <button
        type="button"
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="sr-only">View notifications</span>
        {/* Replace <BellIcon /> with your icon component */}
        <span className="h-6 w-6" aria-hidden="true">🔔</span>
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