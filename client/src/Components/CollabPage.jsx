import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import Navbar from "./Navbar";

const CollabPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/projectContri/getProjects"
                );
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
            <Navbar />
            <header>
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
                    <div class="relative overflow-hidden">
                        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                                <div class="sm:max-w-lg">
                                    <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Project Collab</h1>
                                    <p class="mt-4 text-md text-gray-500">Project collaboration is a powerful tool that enhances productivity and communication within a team. It allows for real-time cooperation, ensuring that everyone is on the same page and working towards the same goals. This not only speeds up the project completion time but also improves the quality of the work. With the ability to share knowledge, distribute workload, and make informed decisions quickly, project collaboration ultimately leads to more successful project outcomes. Furthermore, it supports remote work, making it an essential tool in today's global and digital work environment.</p>
                                </div>
                                <div>
                                    <div class="mt-10">

                                        <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                                <div class="flex items-center space-x-6 lg:space-x-8">
                                                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                            <img src="https://placekitten.com/g/200/300" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placekeanu.com/200/300" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                    </div>
                                                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placekeanu.com/684/350/" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placekeanu.com/250/350/y" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placekitten.com/g/200/300" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                    </div>
                                                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placekeanu.com/684/350/y" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                            <img src="https://placebear.com/684/350" alt="" class="h-full w-full object-cover object-center" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Svelte Signals</a>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </header>
            <div className=" flex flex-col justify-between h-full bg-no-repeat bg-cover text-black">
                {projects.map((project, index) => (
                    <div
                        key={project._id}
                        className="flex flex-col justify-between p-4 m-4 border border-gray-400 rounded"
                    >
                        <div className="p-4 m-4">
                            <h1>
                                {index}. {project.pFrojectName}
                            </h1>
                        </div>
                        <div className="p-4 m-4">
                            <h1>Description: {project.projectDescription}</h1>
                        </div>
                        <div className="p-4 m-4">
                            <h1>Skills: {project.projectTechStack}</h1>
                            <h2>Domain: {project.projectDomain}</h2>
                        </div>
                        <div className="p-4 m-4">
                            <h1>Owner: {project.ownerName}</h1>
                            <h2>Email: {project.ownerEmail}</h2>
                            <h2>Github: {project.ownerGithubUsername}</h2>
                        </div>
                        <div>
                            <h1>Link: {project.activeLink}</h1>
                        </div>
                    </div>
                ))}
                <div className="flex justify-center items-center">
                    <Link to="/collabForm">
                        <button
                            type="button"
                            className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        >
                            Add Project
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CollabPage;
