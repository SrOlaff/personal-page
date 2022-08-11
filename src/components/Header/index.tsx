import React from 'react';

function Header() {
  return (
    <nav className="w-full fixed">
      <ul className="container mx-auto text-white flex justify-end space-x-14 text-2xl py-8">
        <li>home</li>
        <li>me</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

export default Header;
