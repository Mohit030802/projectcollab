import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [github, setGithub] = useState('');
    const [bio, setBio] = useState('');
    const [skills, setSkills] = useState('');
    const [picture, setPicture] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/user/register', { username, email,password,githubUsername:github,bio,skills })
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='bg-registerbg flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat text-white'>
            <div className="grid grid-cols-2">
                <div className='bg-[#152f43] p-6 rounded-xl ml-4'>
                    <div className=''>
                        {/* <img src={logo} width="100%" height="100%"  alt="" className='h-[20vh] w-[20vw] ' /> */}
                        <h2 className="text-3xl font-bold mb-4 text-white font-protest">Welcome back</h2>
                        <Link to='/login'>
                            <p className="text-white mb-4">Already had an account log in from <a href="#" className="text-blue-500">Log In </a>.</p>
                        </Link>
                        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                            <div className='flex flex-col'>

                                <label htmlFor="email" className="text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="name@company.com"

                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"

                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />

                            </div>
                            {/*<div className="flex justify-between items-center w-full">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="mr-2"
                                    />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <a href="#" className="text-blue-500">Forgot password?</a>
    </div>*/}
                            <div className='flex flex-col'>

                                <label className="text-white">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="xyz123"

                                    onChange={(e) => setUsername(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />
                                <label >Github</label>
                                <input
                                    type="text"
                                    id="githubusername"
                                    placeholder="xyz123"

                                    onChange={(e) => setGithub(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />

                            </div>
                            <div className='flex flex-col'>

                                <label className="text-white">Bio</label>
                                <textarea
                                    type="text"
                                    id="bio"
                                    placeholder="I am XYX"

                                    onChange={(e) => setBio(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />
                                <label >skills</label>
                                <input
                                    type="text"
                                    id="skills"
                                    placeholder="I know React, Node, Express, MongoDB, etc."

                                    onChange={(e) => setSkills(e.target.value)}
                                    className="border-2 border-white text-black rounded-lg p-2 m-2"
                                />

                            </div>
                            <button
                                type="submit"
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full uppercase tracking-wider transition duration-300 ease-in-out mt-4"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div className="flex justify-center items-center mt-4">
                            <button className="text-white border border-gray-400 rounded-full py-2 px-4 mr-4">Sign in with Google</button>
                            <button className="text-white border border-gray-400 rounded-full py-2 px-4">Sign in with Apple</button>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div>
                        <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg' width="100%" height="100%" alt="Vector Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
