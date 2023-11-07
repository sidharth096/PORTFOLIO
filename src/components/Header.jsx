import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <>

      <nav className=' top-0 left-0 w-full fixed bg-black shadow-xl shadow-black z-50 h-16'>
        <div className='hidden  md:flex flex-row justify-end p-5 pr-24 gap-10 text-lg text-white font-semibold'>
          <a onClick={() => scrollToSection('home')} className='hover:text-sky-500 cursor-pointer'>Home</a>
          <a onClick={() => scrollToSection('project')} className='hover:text-sky-500 cursor-pointer'>Portfolio</a>
          <a onClick={() => scrollToSection('about')} className='hover:text-sky-500 cursor-pointer'>About</a>
          <a onClick={() => scrollToSection('contact')} className='hover:text-sky-500 cursor-pointer'>Contact</a>

        </div>

        <div className="md:hidden p-3 cursor-pointer">
          <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} onClick={toggleMenu} />
        </div>

        {showMenu && (
          <div className='flex flex-col text-lg text-white font-semibold gap-7 md:hidden px-10' >
            <a onClick={() => scrollToSection('home')} className='hover:text-sky-400 cursor-pointer'>Home</a>
            <a onClick={() => scrollToSection('project')} className='hover:text-sky-400 cursor-pointer'>Portfolio</a>
            <a onClick={() => scrollToSection('about')} className='hover:text-sky-400 cursor-pointer'>About</a>
            <a onClick={() => scrollToSection('contact')} className='hover:text-sky-400 cursor-pointer'>Contact</a>
          </div>
        )}
      </nav>

    </>
  );
};

export default Header;
