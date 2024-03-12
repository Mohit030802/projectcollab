import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const IdeaExchange = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:3000/ideas/allIdeas');
                console.log(res.data.ideas);
                setProjects(res.data.ideas);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}-${dd}-${yyyy}`;
    };
    return (
        <div className=' flex flex-col justify-between h-full bg-no-repeat bg-cover text-white'>
            {projects?.map((project, index) => (
                <div key={project._id} className='flex flex-col justify-between p-4 m-4 border border-gray-400 rounded'>

                    <div className='p-4 m-4'>
                        <h1>{index}. {project.title}</h1>
                    </div>
                    <div className='p-4 m-4'>
                        <h1>Description: {project.description}</h1>
                    </div>
                    <div className='p-4 m-4'>
                        <h1>Skills: {project.techStack}</h1>
                        <h2>Domain: {project.domain}</h2>
                        <h2>Category: {project.category}</h2>
                    </div>
                    <div className='p-4 m-4'>
                        <h1>Owner: {project.ownerName}</h1>
                        <h2>Email: {project.ownerEmail}</h2>
                        <h2>Github: {project.ownerGithubUsername}</h2>

                    </div>
                    <div>
                        <h1>Duration: {project.duration}</h1>
                        <h2>{formatDate(project.createdOn)}</h2>
                    </div>
                </div>
            ))}
            <div className='flex justify-center items-center'>
                <Link to='/ideaForm'>
                    <button type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Idea</button>
                </Link>
            </div>
        </div>
    );
}

export default IdeaExchange
