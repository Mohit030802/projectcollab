import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState([0]);
  const [myProjects, setMyProjects] = useState([]);
  const[myIdeas,setMyIdeas]=useState([])
  const navigate=useNavigate()

  const token = localStorage.getItem('token')
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
    const fetchUser = async () => {

      try {
        if (token) {
          axios.defaults.headers.common['authorization'] = token;

          const res = await axios.get('http://localhost:3000/user/userInfo')
          setUser(res.data)


        }
        
      } catch (error) {
        console.log(error)
      }
    }
    const fetchProjects = async () => {
      try {
        if (token) {
          axios.defaults.headers.common['authorization'] = token;
          const res = await axios.get('http://localhost:3000/projectContri/myProjects')
          setMyProjects(res.data.projects)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
    const fetchIdeas = async () => {
      try {
        if(token){
          axios.defaults.headers.common['authorization']=token;
          const res=await axios.get('http://localhost:3000/ideas/myIdeas')
          setMyIdeas(res.data.ideas)
        }
        
      } catch (error) {
        console.log(error)
      }
    }


    fetchUser();
    fetchProjects();
    fetchIdeas();
  }, [])

  console.log('User')
  console.log(user)
  console.log("Projects")
  console.log(myProjects)
  console.log("Ideas")
  console.log(myIdeas)
  return (
    <>
      <div className='  h-full bg-cover'>

        <div class="container  mx-auto flex justify-between p-10">
          <div class="user-info bg-gray-800 text-white p-8 rounded-lg w-1/3">
            <h1 class="text-xl font-bold mb-4">User Info</h1>
            <h2>Username: {user[0].username}</h2>
            <h2>Email: {user[0].email}</h2>
            <h2>GITHUB: {user[0].githubUsername}</h2>
            <p class="mt-4"><h2>Bio:</h2> {user[0].bio}</p>
            <h2 class="mt-4">Skills: {user[0].skills}</h2>
          </div>
          <div class="projects-container bg-gray-800 text-white p-8 rounded-lg w-2/3 ml-10">
            <h1 class="text-xl font-bold mb-4">Projects</h1>
            {myProjects.map((project, index) => (
              <div class="project-card border border-gray-700 rounded-lg p-4 mb-4">
                <h1 class="text-lg font-bold">Project {index + 1}: {project.projectName}</h1>
                <h2>Description: {project.projectDescription}</h2>
                <h2>Domain: {project.projectDomain}</h2>
                <h2>Tech Stack: {project.projectTechStack}</h2>
                <h2>Active Link: {project.activeLink}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div class="projects-container bg-gray-800 text-white p-8 rounded-lg  ml-10 mr-10">
            <h1 class="text-xl font-bold mb-4">Ideas</h1>
            {myIdeas.map((idea, index) => (
              <div class="project-card border border-gray-700 rounded-lg p-4 mb-4">
                <h1 class="text-lg font-bold">Project {index + 1}: {idea.title}</h1>
                <h2>Description: {idea.description}</h2>
                <h2>Domain: {idea.domain}</h2>
                <h2>Tech Stack: {idea.techStack}</h2>
                <h2>Category: {idea.category}</h2>
                <h2>Active Link: {idea.createdOn}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
