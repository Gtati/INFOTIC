import React, { useState, useEffect } from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <section className={`modal-overlay ${isOpen ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <div className="header-modal">
          <img src={data.image} alt={data.name} className="img-modal" />
          <div className="name-email-areas">
            <h5>Nombre: {data.name}</h5> <br />
            <h5>Correo: {data.email}</h5> <br />
            <h5>Áreas: {data.areas}</h5>
          </div>
        </div>
        <div className="experience-studys">
          <h5>Experiencia: <br /> {data.experiencia}</h5> <br />
          <h5>Estudios: <br /> {data.estudios}</h5>
        </div>
      </div>
    </section>
  );
};
