import React from 'react'

function ProjectCard({
    projectName,
    projectDescription,
    imageUrl
}) {
  return (
    <div className='project-card'>
        <div className="image-container">
            <img src={imageUrl} alt={projectName} className='project-image' loading='lazy' width={300}/>
        </div>
        <div className="project-details-container">
            <h2 className='project-heading'>{projectName}</h2>

            <p className='project-details'>{projectDescription}</p>

        </div>
    </div>
  )
}

export default ProjectCard