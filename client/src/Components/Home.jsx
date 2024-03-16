import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import MainComp from './MainComp.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.jsx';
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
            <div className=' flex flex-col justify-between h-screen bg-cover bg-no-repeat '>
                
                <Navbar/>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing .{' '}

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                PROJECT COLLAB
                            </h1>
                            <p className="mt-6 font-lora text-md leading-8 text-gray-600">
                                Are you eager to contribute to projects, engage with a supportive community, and showcase your own endeavors?
                                Look no further! Our platform is designed for active seekers of assistance, providing an ideal space to share, learn, and collaborate.

                                Whether you have a budding idea awaiting nurturing or a project in need of collaborative minds,
                                this is the perfect environment to make your aspirations a reality. Share your vision, outline your goals, and watch as like-minded individuals
                                join forces to bring your project to fruition.
                            </p>

                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                {/* <hr class="w-11/12 h-px mx-auto my-4 bg-[#181615] border-0 rounded "></hr> */}
                </div>

                <MainComp />
            </div>
        </>
    );
}

export default Home;
