import React from 'react';
import { Link } from 'react-router-dom';

const MainComp = () => {
  return (
    <div className=' flex flex-col justify-between h-[120vh] bg-cover bg-no-repeat text-white'>
      <div className='flex h-fit justify-center items-center '>
        <div className="max-w-md bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#fff8dc] via-[#f1e1a6db]  to-[#e6d38ec8] outline-none mx-auto p-8 flex flex-col justify-center border-2 border-[#7464297a] items-center outline outline-2 rounded-lg shadow-xl z-10 hover:shadow-2xl hover:shadow-[#d8c682] transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-black font-protest">Project Collaboration</h2>
          <p className="text-[#746429] mb-8 mt-6 text-shadow font-lora shadow-[#D5DEEF] text-center">
            Our project collaboration platform serves as an innovative space where individuals with diverse skills and ideas come together to contribute, learn, and build impactful projects. Whether you're an enthusiast seeking guidance or a seasoned developer eager to share your expertise, our platform offers a welcoming community to foster collaboration.
          </p>

          <p className='text-[#362e12] font-lora mb-8'> So, Join our project collaboration platform today and be a part of a dynamic community where ideas flourish, skills are honed, and projects come to life through the power of collaboration!</p>
          <Link to='/collab'>
            <button className='transition-all duration-500 bg-gradient-to-tl to-[#746429]  via-black from-[#e6d38ec8] bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 px-4 border outline-none hover:border-transparent rounded-full uppercase tracking-wider '>Get Started</button>
          </Link>
        </div>
        <hr class="w-96 h-1 mx-auto rotate-90 my-10   bg-[#F7B762] border-0 rounded md:my-10 "></hr>
        <div className="max-w-md mx-auto p-8 flex flex-col bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#e6d38ec8] via-[#f4df92db]  to-[#fff8dc] outline-none justify-center items-center border-2 border-[#7464297a] outline outline-2 rounded-lg shadow-xl z-10 hover:shadow-2xl hover:shadow-[#d8c682]  transition duration-300">
          <h2 className="text-3xl font-bold mb-4 text-black font-protest">Project Ideas Exchange</h2>
          <p className="text-[#000] mb-8 mt-6 text-shadow shadow-[#D5DEEF] text-center">
            Welcome to the Project Ideas Exchange, where creativity meets collaboration! Our platform serves as a vibrant marketplace for sharing, discovering, and collaborating on exciting project ideas. Whether you're a visionary with a brilliant concept or someone seeking inspiration, this is the perfect space to explore innovative projects and connect with like-minded individuals.
          </p>
          <p className='text-black font-lora mb-8'> So, Join the Project Ideas Exchange today and embark on a journey of creativity, collaboration, and innovation. Together, let's turn ideas into reality and make a positive impact on the world!</p>
          <Link to='/ideas'>

            <button className='transition-all duration-500 bg-gradient-to-tl to-[#746429]  via-black from-[#e6d38ec8] bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 px-4 border outline-none hover:border-transparent rounded-full uppercase tracking-wider '>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
