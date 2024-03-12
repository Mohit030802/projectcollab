import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedin, setIsLoggedin] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/user/login', { email, password })
      setIsLoggedin(true)
      localStorage.setItem('token', res.data.token) 
      console.log(res.data.token)
     
        navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }
   

    return (
        <div className=' flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat text-white'>
            <div className="grid grid-cols-2">
                <div className='bg-[#152f43] p-6 rounded-xl ml-4'>
                    <div className=''>
                        {/* <img src={logo} width="100%" height="100%"  alt="" className='h-[20vh] w-[20vw] ' /> */}
                        <h2 className="text-3xl font-bold mb-4 text-white font-protest">Welcome back</h2>
                        <Link to='/register'>
                            <p className="text-white mb-4">Start your website in seconds. Don’t have an account? <span className="text-blue-500">Sign up</span>.</p>
                        </Link>
                        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
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
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="mr-2"
                                    />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <a href="#" className="text-blue-500">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full uppercase tracking-wider transition duration-300 ease-in-out mt-4"
                            >
                                Sign in
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
};

export default Login;
