import React from 'react'
import './Card.css'

export const Card = ({image, name}) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <button className="card-button">Mas sobre mi</button>
    </div>
  )
}
