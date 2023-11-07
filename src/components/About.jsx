import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="xl:px-40 md:px-28 px-16 mt-20 z-10" id="about">
      <h1 class="text-sky-400 lg:text-3xl text-2xl font-semibold text-center mb-10  ">

        About...
      </h1>
      <div className="text-center">
        <p className="text-white p-4 md:p-8 px-2 md:px-20 text-lg md:text-xl  shadow-md shadow-sky-400 rounded-lg ">
          I'm a full-stack developer specializing in both frontend and backend development for scalable web applications. I've built a variety of MERN stack applications. Explore my projects on my GitHub profile.
          <span className="block mt-4">
            <a href="https://github.com/sidharth096" className="text-sky-400 font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }} /> Profile
            </a>
          </span>
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between text-white gap-5">
        <div className="w-full md:w-1/3 hover:border hover:border-sky-400 bg-slate-900 px-8 py-6 rounded-lg ">
          <h1 className="text-sky-400 font-semibold text-xl">Frontend</h1>
          <ul className="list-disc mt-3">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 hover:border hover:border-sky-400 bg-slate-900 px-8 py-6 rounded-lg">
          <h1 className="text-sky-400 font-semibold text-xl">Backend</h1>
          <ul className="list-disc mt-3">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>API Development</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 hover:border hover:border-sky-400 bg-slate-900 px-8 py-6 rounded-lg">
          <h1 className="text-sky-400 font-semibold text-xl">Others</h1>
          <ul className="list-disc mt-3">
            <li>API Integration</li>
            <li>Postman</li>
            <li>JSON</li>
            <li>AJAX</li>
          </ul>
        </div>
      </div>
      {/* <div className="mt-10 flex justify-center gap-10">
        <a href="https://www.linkedin.com/in/sidharthtp/" className="border border-sky-400 rounded-lg p-5 cursor-pointer hover:shadow-md hover:shadow-sky-400">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#38d7ff" }} />
        </a>
        <a href="https://github.com/sidharth096" className="border border-sky-400 rounded-lg p-5 cursor-pointer hover:shadow-md hover:shadow-sky-400">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }} />
        </a>
        <a href="https://www.instagram.com/sidharth_tp_/" className="border border-sky-400 rounded-lg p-5 cursor-pointer hover:shadow-md hover:shadow-sky-400">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#38d7ff" }} />
        </a>
      </div> */}
    </div>
  );
};

export default About;
