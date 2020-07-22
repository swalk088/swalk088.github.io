  
import React from 'react'

const PhotographerSummary = ({photographer}) => {
  return (
    <div className="card z-depth-0 photographer-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{photographer.title}</span>
        <p>Posted by {photographer.firstName} {photographer.lastName}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default PhotographerSummary