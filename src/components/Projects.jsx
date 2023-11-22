import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <>
    <div className='xl:px-40 md:px-28 px-16 mt-20' id='project'>
      <h1 className='text-sky-400 lg:text-3xl text-2xl font-semibold text-center mb-10   '>Projects...</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        {/* Project 1 */}
        <div className=" rounded-lg shadow-md shadow-sky-400 p-2 opacity-80 hover:opacity-100 flex flex-col justify-between ">
            <div className=''>
            <img  src="cotton-candy.png" alt="Project 1" className="w-full h-36 object-cover rounded-lg " />
            </div>
         
          <div className="p-2">
            <h2 className="text-lg font-semibold text-sky-400">Cotton Candy</h2>
            <p className="text-sm ">I had the opportunity to create a feature-rich e-commerce website using Node.js and EJS templates. This project highlights my skills in server-side rendering and building dynamic web </p>
          </div>
          <div className='text-center'>
           <a className='  rounded-full shadow-md shadow-slate-400 p-1 cursor-pointer' href="https://github.com/sidharth096/Cotton-Candy.git"><FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }}/></a>
          </div>

        </div> 
  
        {/* Project 2 */}
        <div className=" rounded-lg shadow-md  shadow-sky-400 p-2 opacity-80 hover:opacity-100 flex flex-col justify-between ">
            <div>
            <img src="creative-comapny.png" alt="Project 2" className="w-full h-36 object-cover rounded-lg" />
            </div>
         
          <div className="p-2">
            <h2 className="text-lg font-semibold text-sky-400">Creative Comany</h2>
            <p className="text-sm">I designed and developed a web platform that connects construction workers and employers, streamlining worker registration, job searches, and design access to simplify skilled worker discovery.</p>
          </div>
          <div className='text-center'>
           <a className='  rounded-full shadow-md shadow-slate-400 p-1 cursor-pointer' href="https://github.com/sidharth096/CREATIVE-COMPANY.git"><FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }}/></a>
          </div>
        </div>
   
        {/* Project 3 */}
        <div className=" rounded-lg shadow-md shadow-sky-400 p-2 opacity-80 hover:opacity-100 flex flex-col justify-between">
            <div>
            <img src="todo-list.png" alt="Project 3" className="w-full h-36 object-cover rounded-lg" />
            </div>
          <div className="p-2">
            <h2 className="text-lg font-semibold text-sky-400">Todo List</h2>
            <p className="text-sm">I designed a user-friendly to-do list app with task creation, prioritization, and responsive design. It showcases my full-stack web development and UI design skills.</p>
          </div>
          <div className='text-center'>
           <a className='  rounded-full shadow-md shadow-slate-400 p-1 cursor-pointer' href="https://github.com/sidharth096/TODO-LIST.git"><FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }}/></a>
          </div>
        </div>
  
        {/* Project 4 */}
        <div className=" rounded-lg shadow-md shadow-sky-400 p-2 opacity-80 hover:opacity-100 flex flex-col justify-between">
            <div>
            <img src="chat.png" alt="Project 4" className="w-full h-36 object-cover rounded-lg" />
            </div> 
          <div className="p-2">
            <h2 className="text-lg font-semibold text-sky-400">Chat app</h2>
            <p className="text-sm">I built a real-time chat application with Socket.io, allowing users to engage in live conversations instantly. This project showcases my expertise in real-time web development and WebSocket technology.</p>
          </div>
          <div className='text-center '>
           <a className='  rounded-full shadow-md shadow-slate-400 p-1 cursor-pointer' href="https://github.com/sidharth096/chat-app.git"><FontAwesomeIcon icon={faGithub} style={{ color: "#38d7ff" }}/></a>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Projects
