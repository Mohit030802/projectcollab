import React from 'react';
import { Link } from 'react-router-dom';

const MainComp = () => {
  return (
    <div className='bg-mainbg flex flex-col justify-between h-[120vh] bg-cover bg-no-repeat text-white'>
      <div className='flex h-fit'>
        <div className="max-w-md mx-auto p-8 flex flex-col justify-center items-center outline outline-2 rounded-lg shadow-xl z-10 hover:shadow-2xl hover:shadow-[#5d68a1] transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-white font-protest">Project Collaboration</h2>
          <p className="text-[#F0F3FA] mb-8 mt-6 text-shadow font-lora shadow-[#D5DEEF] text-center">
            Our project collaboration platform serves as an innovative space where individuals with diverse skills and ideas come together to contribute, learn, and build impactful projects. Whether you're an enthusiast seeking guidance or a seasoned developer eager to share your expertise, our platform offers a welcoming community to foster collaboration.
          </p>

          <p className='text-gray-400 font-lora mb-8'> So, Join our project collaboration platform today and be a part of a dynamic community where ideas flourish, skills are honed, and projects come to life through the power of collaboration!</p>
          <Link to='/collab'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full uppercase tracking-wider transition duration-300 ease-in-out'>Get Started</button>
          </Link>
        </div>

        <div className="max-w-md mx-auto p-8 flex flex-col justify-center items-center outline outline-2 rounded-lg shadow-xl z-10 hover:shadow-2xl hover:shadow-[#815898]  transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-white font-protest">Project Ideas Exchange</h2>
          <p className="text-[#FOF3FA] mb-8 mt-6 text-shadow shadow-[#D5DEEF] text-center">
            Welcome to the Project Ideas Exchange, where creativity meets collaboration! Our platform serves as a vibrant marketplace for sharing, discovering, and collaborating on exciting project ideas. Whether you're a visionary with a brilliant concept or someone seeking inspiration, this is the perfect space to explore innovative projects and connect with like-minded individuals.
          </p>
          <p className='text-gray-400 font-lora mb-8'> So, Join the Project Ideas Exchange today and embark on a journey of creativity, collaboration, and innovation. Together, let's turn ideas into reality and make a positive impact on the world!</p>
          <Link to='/ideas'>
          
          <button className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full uppercase tracking-wider transition duration-300 ease-in-out'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
