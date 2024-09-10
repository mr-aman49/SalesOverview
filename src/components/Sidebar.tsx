// src/components/Sidebar.tsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
      <button
        className="text-white bg-gray-700 hover:bg-gray-600 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Overview</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Sales by Region</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Top Products</a>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
