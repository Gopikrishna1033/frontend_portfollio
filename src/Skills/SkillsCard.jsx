import React from 'react'

function SkillsCard({
    skillName,
    skillUrl
}) {
  return (
    <div className='skill'>
        <img src={skillUrl} alt={skillName} />
        <p>{skillName}</p>
    </div>
  )
}

export default SkillsCard