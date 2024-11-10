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
            <a href="/">Home</a>
          </li>
          <li className='menulink'>
            <a href="#about">About</a>
          </li>
          <li className='menulink'>
            <a href="#skills">Skills</a>
          </li>
          <li className='menulink'>
            <a href="#contact">Contact</a>
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
            <a href="/" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
