
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import CollabPage from './Components/CollabPage'
import IdeaExchange from './Components/IdeaExchange'
import ProjectForm from './Components/ProjectForm'

import IdeaForm from './Components/IdeaForm'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/collab' element={<CollabPage/>}></Route>
        <Route path='/ideas' element={<IdeaExchange/>}></Route>
        <Route path='/collabForm' element={<ProjectForm/>}></Route>
        <Route path='/ideaForm' element={<IdeaForm/>}></Route>
        <Route path='*' element={<Home/>}></Route>
        
      </Routes> 
      

    </>
  )
}

export default App
