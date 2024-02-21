import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <div className='bg-light flex flex-col justify-between h-full bg-no-repeat bg-cover text-white'>
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
        </div>
    );
}

export default IdeaExchange
