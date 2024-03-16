import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [user, setUser] = useState();

    return (
        <>
            <div className='flex justify-between p-4 m-4'>
                <div className='bg-[#9089fc] text-white p-2 flex justify-center items-center border-2 border-[#5549f2] border-opacity-45 rounded-full outline outline-4 outline-white hover:drop-shadow-2xl hover:drop-shadow-white cursor-pointer'>
                    <DensityMediumIcon />
                </div>
                <div>
                    <ul className='text-black flex justify-between items-center gap-16 text-lg'>
                        <li className='font-bold text-[#000]'>Home</li>
                        <li>About Us</li>
                        <li>Ideas</li>
                        <li>Projects</li>

                    </ul>
                </div>
                <div className='bg-[#ff80b5] text-white p-2 flex justify-center items-center border-2 border-[#fd4b96] outline outline-4 outline-white hover:drop-shadow-2xl hover:drop-shadow-white cursor-pointer rounded-full h-[80%]' >
                    <div><Link to='/profile'>{user ? `${user[0].username}` : <PersonIcon />}</Link></div>
                </div>
            </div>
        </>
    )
}

export default Navbar
