import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <>
            <div className='w-full xl:px-44 md:px-28 px-6 mt-16 flex flex-col-reverse md:flex-row items-center justify-between z-10' id='home'>
                <div className='text-white font-semibold text-center md:text-left  '>
                    <h3 className='text-2xl xl:text-4xl lg:text-3xl mt-4'>Hello, It's Me</h3>
                    <h1 className='text-4xl xl:text-7xl lg:text-6xl mt-4 '>Sidharth TP</h1>
                    <h3 className='text-lg lg:text-xl'>And I'm a <span className='text-sky-400  '>MERN Stack Developer</span></h3>
                    <div className="mt-2 flex justify-center md:justify-start gap-2">
                        <a href="https://www.linkedin.com/in/sidharthtp/" className="rounded-lg p-2 cursor-pointer hover:shadow-md hover:shadow-sky-400">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#38d7ff" }} />
                        </a>
                        <a href="https://github.com/sidharth096" className=" rounded-lg p-2 cursor-pointer hover:shadow-md hover:shadow-sky-400">
                            <FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }} />
                        </a>
                        <a href="https://www.instagram.com/sidharth_tp_/" className=" rounded-lg p-2 cursor-pointer hover:shadow-md hover:shadow-sky-400">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#38d7ff" }} />
                        </a>
                    </div>
                    <button className='bg-sky-400 text-white px-2 py-1 rounded-2xl mt-5 shadow-md shadow-sky-400'><a href="https://drive.google.com/file/d/1xm3IXfQPwTJF8KZXWA1cSl922GVWPdps/view?usp=drive_link">Resume</a></button>
                </div>

                <div className='z-10'>
                    <img className=' object-cover opacity-80 hover:opacity-50 transition duration-1000 cursor-wait animate-bounce  hover:animate-none ' src="3.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
