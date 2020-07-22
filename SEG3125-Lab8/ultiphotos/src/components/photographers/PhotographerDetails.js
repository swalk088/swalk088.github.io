  
import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { id }</span>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails