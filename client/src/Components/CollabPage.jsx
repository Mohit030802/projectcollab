import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CollabPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:3000/projectContri/getProjects');
                console.log(res.data.projects);
                setProjects(res.data.projects);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <div className=' flex flex-col justify-between h-full bg-no-repeat bg-cover text-black'>
                {projects.map((project, index) => (
                    <div key={project._id} className='flex flex-col justify-between p-4 m-4 border border-gray-400 rounded'>

                        <div className='p-4 m-4'>
                            <h1>{index}. {project.projectName}</h1>
                        </div>
                        <div className='p-4 m-4'>
                            <h1>Description: {project.projectDescription}</h1>
                        </div>
                        <div className='p-4 m-4'>
                            <h1>Skills: {project.projectTechStack}</h1>
                            <h2>Domain: {project.projectDomain}</h2>
                        </div>
                        <div className='p-4 m-4'>
                            <h1>Owner: {project.ownerName}</h1>
                            <h2>Email: {project.ownerEmail}</h2>
                            <h2>Github: {project.ownerGithubUsername}</h2>

                        </div>
                        <div>
                            <h1>Link: {project.activeLink}</h1>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center items-center'>
                    <Link to='/collabForm'>
                        <button type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Project</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CollabPage;
