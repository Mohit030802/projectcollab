import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import MainComp from './MainComp.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['authorization'] = token;

                    const res = await axios.get('http://localhost:3000/user/userInfo')
                    setUser(res.data)

                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser();
    }, [])

    return (
        <>
            <div className=' bg-navbg flex flex-col justify-between h-screen bg-cover bg-no-repeat '>
                <div className='flex justify-between p-4 m-4'>
                    <div className='bg-[#F7B762] text-white p-2 flex justify-center items-center border-2 border-[#f7ad4c] border-opacity-45 rounded-full outline outline-4 outline-white hover:drop-shadow-2xl hover:drop-shadow-white cursor-pointer'>
                        <DensityMediumIcon />
                    </div>
                    <div className='flex justify-center flex-grow font-protest text-6xl text-black'>
                        Project <span className='text-[#d0913f]'>Collab</span>
                    </div>
                    <div className='bg-[#F7B762] text-white p-2 flex justify-center items-center border-2 border-[#f7ad4c] outline outline-4 outline-white hover:drop-shadow-2xl hover:drop-shadow-white cursor-pointer rounded-full h-[50%]' >
                        <div><Link to='/profile'>{user ? `${user[0].username}` : <PersonIcon />}</Link></div>
                    </div>
                </div>
                <div className='flex  flex-col h-screen justify-center items-center '>
                    <div className='bg-[#faebd785] p-10 border border-[#F7B762]  rounded-full shadow-[5px_5px_0px_0px_rgb(247,183,98)]'>

                        <div className='flex justify-center  m-7'>
                            <div className='text-5xl  font-protest text-black'>Welcome to ProjectCollab</div>
                        </div>
                        <div className='  py-6 flex flex-col justify-center items-center text-balance text-black text-shadow shadow-gray-400'>
                            <p className='flex justify-center font-lora'>
                                Welcome to a vibrant community hub!
                            </p>
                            <p className="font-lora  ">
                                Are you eager to contribute to projects, engage with a supportive community, and showcase your own endeavors?
                                <p>Look no further! Our platform is designed for active seekers of assistance, providing an ideal space to share, learn, and collaborate.</p>
                            </p>
                            <p className="font-lora">
                                Whether you have a budding idea awaiting nurturing or a project in need of collaborative minds,</p>
                            <p className='font-lora'>this is the perfect environment to make your aspirations a reality. Share your vision, outline your goals, and watch as like-minded individuals </p>
                            <p className='font-lora'>join forces to bring your project to fruition.</p>
                        </div>

                    </div>
                </div>
            </div>
            <hr class="w-11/12 h-px mx-auto my-4 bg-[#F7B762] border-0 rounded  "></hr>
            <MainComp />
        </>
    );
}

export default Home;
