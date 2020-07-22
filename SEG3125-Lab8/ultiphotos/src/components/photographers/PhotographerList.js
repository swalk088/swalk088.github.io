import React from 'react'
import ProjectSummary from './PhotographerSummary'
import {Link} from 'react-router-dom'

const PhotographerList = ({photographers}) => {
  return (
    <div className="photographer-list section">
      { photographers && photographers.map(photographer => {
        return (
          <Link  to={'/photographers/'+photographer.id}key={photographer.id}>
          <ProjectSummary photographer={photographer} />
          </Link>
        )
      })}  
    </div>
  )
}

export default PhotographerList