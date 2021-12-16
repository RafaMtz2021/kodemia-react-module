import React from 'react'

const Character = ({ name, img, species, status}) => {  
  return (    
  <div className="card" style={{width: 18 + 'em'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bolder fs-4">{name}</h5>
    <p className="card-text fw-bold fs-6">{species} / Status: {status}</p>
  </div>
  </div>
  )
}

export default Character