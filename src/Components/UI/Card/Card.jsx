import React from 'react'
import './Card.css'

export const Card = ({image, name,description, onClick, position}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <h2>{position}</h2>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <a className="card-button">Saber más</a>
    </div>
  )
}
