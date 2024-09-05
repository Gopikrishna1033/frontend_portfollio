import React from 'react'
import SkillsCard from './SkillsCard'
import {skillsData} from "../assets/skillsData"
import { Link } from 'react-router-dom'
import "./Skills.css"
function Skills() {
  return (
    <div className='Skill-heading'>
        <h1>My Skills</h1>
        <p className='skill-para'>Passionate about new technologies, I keep enhancing new Skills. Here are few skills that i worked with...</p>
        <div className="skill-card-container">
            {
                skillsData.map(({
                    skillName,skillUrl
                },index)=>{
                    return (
                        <SkillsCard 
                         skillName={skillName}
                         skillUrl={skillUrl}
                        />
                    )

                })
            }
        </div>

        <div className="contact">
           <Link to="/contact">
           <h4>Get in touch</h4>
           </Link>
            
        </div>
    </div>
  )
}

export default Skills