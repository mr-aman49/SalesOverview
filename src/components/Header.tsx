// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Sales Dashboard</h1>
        <div className="relative">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Profile</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
