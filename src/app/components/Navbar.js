// components/Navbar.js
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-8 flex justify-between">
      <h1 className="text-2xl font-semibold">Slimene</h1>
      <img
        id="openmenuBtn"
        onClick={toggleMenu}
        className="inline md:hidden w-8 invert cursor-pointer"
        src="/Assets/menuBar.png"
        alt="Menu"
      />
      <div className={`md:flex ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:static md:bg-transparent bg-white text-black`}>
        <button id="hidemenuBtn" onClick={toggleMenu} className="md:hidden">
          <img src="/Assets/menuClose.png" className="h-full" alt="Close menu" />
        </button>
        <Link href="#about" className="mx-3 hover-underline-animation" onClick={toggleMenu}>
          About me
        </Link>
        <Link href="#work" className="mx-3 hover-underline-animation" onClick={toggleMenu}>
          My work
        </Link>
        <Link href="#contact" className="mx-3 hover-underline-animation" onClick={toggleMenu}>
          Contact
        </Link>
        <button className="mx-3" onClick={() => console.log('Toggle Dark Mode')}>
          <img id="dmImg" src="/Assets/dm.png" className="md:invert w-10 h-10" alt="Dark Mode" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
