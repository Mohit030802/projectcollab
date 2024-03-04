import axios from 'axios'
import React, { useState } from 'react'

const IdeaForm = () => {
    const [title, setTitle] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [ownerGithubUsername, setOwnerGithubUsername] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [domain, setDomain] = useState('')
    const [duration, setDuration] = useState('')
    const [techStack, setTechStack] = useState('')
    const handleDomainSelect = (e) => {
        setDomain(e.target.value);
      };
      const handleCatSelect = (e) => {
        setCategory(e.target.value);
      }
      const handleSubmit=async()=>{
            try {
                const token=localStorage.getItem('token');
            if(token){
                axios.defaults.headers.common['authorization'] = token;
                const res=await axios.post('http://localhost:3000/ideas/addIdea',{title,description,category,duration,domain,techStack})
                console.log(res)

                
              
            }
            } catch (error) {
                console.log(error)
            }
      }
    return (
        <>
            <div className=" text-white">
                <div className="flex bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] mx-auto">
                    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-registerbg border-0">
                            <div className="rounded-t  mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-blueGray-700 text-xl font-bold">
                                        Time to make Best PROJECT
                                    </h6>

                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Personal Information
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    onChange={(e) => setOwnerName(e.target.value)}
                                                    name="firstname"

                                                    className="border-0 px-3 py-3  text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="flex space-x-4">

                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        onChange={(e) => setOwnerEmail(e.target.value)}
                                                        name="email"

                                                        type="email"
                                                        className="border-0  text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Github Username
                                                    </label>
                                                    <input
                                                        onChange={(e) => setOwnerGithubUsername(e.target.value)}
                                                        name="github"

                                                        type="text"
                                                        className="border-0 px-3 text-black py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3 ">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Upload Image
                                                    </label>
                                                    <input

                                                        name="img"

                                                        type="file"

                                                        className="border-0 px-3 py-3 text-black placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        About Project
                                    </h6>

                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="flex space-x-2">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Project Name
                                                    </label>
                                                    <input

                                                        name="langKnow"
                                                        onChange={(e)=>setTitle(e.target.value)}
                                                        type="text"
                                                        className="border-0  text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Category
                                                    </label>
                                                    <select
                                                        onChange={handleCatSelect}
                                                        value={category}
                                                        className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    >
                                                        <option value="">Select Domain</option>
                                                        <option value="example1.com">Category 1</option>
                                                        <option value="example2.com">Category 2</option>
                                                        <option value="example3.com">Category 3</option>
                                                       
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Project Description
                                                </label>
                                                <textarea

                                                    name="aboutme"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    type="textarea"
                                                    className="border-0 px-3 text-black py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    rows="4"

                                                >
                                                    {" "}
                                                </textarea>
                                            </div>
                                           
                                            <div className="flex space-x-4">

                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Domain
                                                    </label>
                                                    <select
                                                        onChange={handleDomainSelect}
                                                        value={domain}
                                                        className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    >
                                                        <option value="">Select Domain</option>
                                                        <option value="example1.com">Example 1</option>
                                                        <option value="example2.com">Example 2</option>
                                                        <option value="example3.com">Example 3</option>
                                                       
                                                    </select>
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Techstack
                                                    </label>
                                                    <input
                                                        onChange={(e) => setTechStack(e.target.value)}
                                                        name="techstack"
                                                        
                                                        type="text"
                                                        className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Duration
                                                    </label>
                                                    <input
                                                        onChange={(e) => setDuration(e.target.value)}
                                                        name="techstack"
                                                        
                                                        type="text"
                                                        className="border-0 text-black px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        Contact Information
                                    </h6>

                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="flex space-x-2">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        LinkedIn
                                                    </label>
                                                    <input

                                                        name="linkedIn"

                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Github
                                                    </label>
                                                    <input

                                                        name="githubId"

                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center ">
                                        <button
                                            onClick={handleSubmit}
                                            className=" bg-[#392d69] text-white active:bg-[#b57bee] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdeaForm
