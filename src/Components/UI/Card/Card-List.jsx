import React, { useState } from 'react'
import { Card } from './Card'
import { Modal } from '../Modal/Modal'
import exampleImage from './../../../assets/Images/imageExampleCards.png'
import './Card-List.css'

export const CardList = () => {

  const exampleCardData = [
    {
      id: 1,
      name: 'Juan Esteban Gonzalez Caro',
      email: 'juan.gonzalez@example.com',
      areas: 'Desarrollo, Diseño',
      estudios: 'Ingeniería de Sistemas',
      experiencia: '2 años en desarrollo web',
      image: exampleImage,
    },
    {
      id: 2,
      name: 'Kike Montilla Garcia',
      email: 'kike.montilla@example.com',
      areas: 'Marketing, Ventas',
      estudios: 'Administración de Empresas',
      experiencia: '3 años en marketing digital',
      image: exampleImage,
    },
    {
      id: 3,
      name: 'Arnoldo Veron Leon',
      email: 'arnoldo.veron@example.com',
      areas: 'Soporte Técnico, Desarrollo',
      estudios: 'Técnico en Sistemas',
      experiencia: '1 año en soporte técnico',
      image: exampleImage,
    },
    {
      id: 4,
      name: 'Leonel Messi Cuccitini',
      email: 'leonel.messi@example.com',
      areas: 'Fútbol, Deportes',
      estudios: 'Educación Física',
      experiencia: '5 años como futbolista profesional',
      image: exampleImage,
    },
    {
      id: 5,
      name: 'Armando Mendoza Pinzon',
      email: 'armando.mendoza@example.com',
      areas: 'Ciencia de Datos, Desarrollo',
      estudios: 'Matemáticas',
      experiencia: '4 años en ciencia de datos',
      image: exampleImage,
    },
    {
      id: 6,
      name: 'Sofia Ramirez',
      email: 'sofia.ramirez@example.com',
      areas: 'Investigación, Biología',
      estudios: 'Biología',
      experiencia: '2 años en investigación científica',
      image: exampleImage,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  
  const openModal = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-list">
      {exampleCardData.map(card => (
        <Card key={card.id} name={card.name} image={card.image} onClick={() => openModal(card)}/>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedCardData} />
    </div>
  )
}
