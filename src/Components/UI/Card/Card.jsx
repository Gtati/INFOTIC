import React from 'react'
import './Card.css'

export const Card = ({image, name, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <button className="card-button">Mas sobre mi</button>
    </div>
  )
}
