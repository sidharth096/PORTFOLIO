import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [name, setName] = useState('');
  const fullName = 'Sidharth TP';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullName.length) {
        setName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
      <div className='w-full xl:px-44 md:px-28 px-6 mt-16 pt-20 flex flex-col-reverse md:flex-row items-center justify-between z-10' id='home'>
        <div className='text-white font-semibold text-center md:text-left'>
          <h3 className='text-2xl xl:text-4xl lg:text-3xl mt-4'>Hello, It's Me</h3>
          <h1 className='text-4xl xl:text-7xl lg:text-6xl mt-4'>{name}</h1>
          <h3 className='text-lg lg:text-xl'>And I'm a <span className='text-sky-400'>MERN Stack Developer</span></h3>
          <div className="mt-2 flex justify-center md:justify-start gap-2">
          </div>
          <button className='bg-sky-400 text-white px-3 py-1 rounded-2xl mt-5 shadow-md shadow-sky-400 '>
            <a href="SIDHARTH.pdf" download="resume">Resume</a>
            <FontAwesomeIcon className='ml-2' icon={faDownload} style={{ color: '#ffffff' }} />
          </button>
        </div>

        <div className='z-10'>
          <img className=' object-cover opacity-80 hover:opacity-50 transition duration-1000 cursor-wait animate-bounce  hover:animate-none ' src="3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
