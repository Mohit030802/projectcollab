import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className='bg-light flex flex-col justify-between h-full bg-no-repeat bg-cover text-white'>
            {/* Mapping through projects array and rendering project cards */}
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
        </div>
    );
};

export default CollabPage;
