import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Project from './Project/Project.jsx'
import Skills from './Skills/Skills.jsx'

function App() {
  return (
    <div>
      <Router>
        <div>
       
          <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='project' element={<Project/>}></Route>
            <Route path='skills' element={<Skills/>}></Route>
          </Routes>
     
        </div>
      </Router>
    </div>
  )
}

export default App