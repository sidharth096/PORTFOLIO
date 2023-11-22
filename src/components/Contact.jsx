import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if (!form.current.checkValidity()) {
        toast("Please fill in all the required fields.");
        return;
    }
  
      emailjs.sendForm('service_s4ajthi', 'template_hg6ktvk', form.current, 'DQlKRIlsj-xGQK3JV')
        .then((result) => {
            console.log(result.text);
            toast("Email send successfully");
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            toast("Email  sending failed");
        });
    };
  return (
   <>
     <div className="xl:px-40 md:px-28 px-16 mt-20 z-10" id="contact">
      <h1 className="text-sky-400 lg:text-3xl text-2xl font-semibold text-center mb-10 b">
        Contact...
      </h1>
    <div class="container mx-auto md:px-6 px-2 py-3">
        <div class="max-w-md mx-auto md:px-8 sm:px-5 px-3 rounded-md shadow-md">
            {/* <h2 class="text-2xl font-semibold mb-4 text-center text-sky-400">Contact Me</h2> */}
            <form action="#" method="post" ref={form} onSubmit={sendEmail}>
                <div class="mb-6 ">
                    {/* <label for="name" class="text-white ">Name</label> */}
                    <input type="text" id="name" placeholder='Name' name="user_name" class="w-full px-3 py-2  rounded-md   bg-slate-700  focus:ring focus:ring-sky-400 focus:outline-none text-white" required/>
                </div>
                <div class="mb-6"> 
                    {/* <label for="email" class="text-gray-600">Email</label> */}
                    <input type="email" id="email" placeholder='email' name="user_email" class="w-full px-3 py-2  rounded-md bg-slate-700 focus:ring focus:ring-sky-400 focus:outline-none text-white" required/>
                </div>
                <div class="mb-6">
                    {/* <label for="message" class="text-gray-600">Message</label> */}
                    <textarea id="message" placeholder='message' name="message" rows="4" class="w-full px-3 py-2  rounded-md bg-slate-700 focus:ring focus:ring-sky-400 focus:outline-none text-white" required></textarea>
                </div>
                <div class="mt-6 text-center">
                    <button type="submit" class="bg-sky-400 text-white px-4 py-1 rounded-md hover:shadow-md hover:shadow-sky-400  ">Send</button>
                </div>
            </form>
        </div>
    </div>
    <ToastContainer />
    </div>
   </>
  )
}

export default Contact
