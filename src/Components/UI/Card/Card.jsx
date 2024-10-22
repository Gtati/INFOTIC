import React from 'react'
import './Card.css'

export const Card = ({image, name,description, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <h4>{description}</h4>
      <button className="card-button">Saber más</button>
    </div>
  )
}
