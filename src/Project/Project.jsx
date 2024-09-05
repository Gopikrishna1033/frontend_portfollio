import React from 'react'
import "./Project.css"
import { projectsData } from '../assets/projectsData'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
function Project() {
  return (
    <div className='project'>
        <h1>My Projects</h1>
        <p className='pro_para'>Here are few things that I've worked on.. Please do check them!</p>
        
        <div className="project-cards-container">
            {
                projectsData.map(({
                    projectName,
                    projectDescription,
                    imageUrl
                },index)=>{
                    return (<ProjectCard key={index}
                    
                        projectName={projectName}
                        projectDescription={projectDescription}
                        imageUrl={imageUrl}
                    />);
                })
            }
        </div>

        <div className="skills">
            <Link to="/skills">
                <h5>Check Out Skills</h5>
            </Link>
            
        </div>
    </div>
  )
}

export default Project