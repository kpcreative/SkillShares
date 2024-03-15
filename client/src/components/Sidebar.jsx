// Sidebar.js
import React from 'react';

const Sidebar = () => {
  // Define dummy data directly within the component
  const dummyData = [
    'Dashboard',
    'Messages',
    'Notifications',
    'Profile',
    'Settings',
  ];

  return (
    <div className="w-64 bg-white h-full p-4"> {/* Changed bg-gray-800 to bg-white */}
      <div className="text-gray-800 font-bold mb-4">Sidebar</div> {/* Changed text-white to text-gray-800 */}
      <ul>
        {dummyData.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
