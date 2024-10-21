import React from 'react'
import { Card } from './Card'
import exampleImage from './../../../assets/Images/imageExampleCards.png'
import './Card-List.css'

export const CardList = () => {

  const exampleCardData = [
    { id: 1, name: 'Juan Esteban Gonzalez Caro', image: exampleImage},
    { id: 2, name: 'Kike Montilla Garcia', image: exampleImage},
    { id: 3, name: 'Arnoldo Veron Leon', image: exampleImage},
    { id: 4, name: 'Leonel Messi Cuccitini', image: exampleImage},
    { id: 5, name: 'Armando Mendoza Pinzon', image: exampleImage},
    { id: 6, name: 'Armando Mendoza Pinzon', image: exampleImage},
  ]

  return (
    <div className="card-list">
      {exampleCardData.map(card => (
        <Card key={card.id} name={card.name} image={card.image}/>
      ))}
    </div>
  )
}
