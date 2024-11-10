import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Zainab Bibi</div>

        {/* Desktop menu */}
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menulink'>
            <Link  href="/">Home</Link >
          </li>
          <li className='menulink'>
            <Link  href="#about">About</Link >
          </li>
          <li className='menulink'>
            <Link  href="#skills">Skills</Link >
          </li>
          <li className='menulink'>
            <Link href="#contact">Contact</Link >
          </li>
        </ul>

        {/* Mobile hamburger menu */}
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li>
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link  href="#about" onClick={toggleMenu}>About</Link >
          </li>
          <li>
            <Link  href="#skills" onClick={toggleMenu}>Skills</Link >
          </li>
          <li>
            <Link  href="#contact" onClick={toggleMenu}>Contact</Link >
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
