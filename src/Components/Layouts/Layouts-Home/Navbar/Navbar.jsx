import React from 'react';
import logoSena from '../../../../assets/Images/logoSena.png';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="header">
      <ul className="info1">
        <Link smooth to="/" aria-label="Ir al inicio">
          <img src={logoSena} alt="Logo Sena" className="logo" />
        </Link>
        <h1 className="title-page">InfoTIC</h1>
      </ul>
      <div className='items'>
        <ul className="itemNavbar">
          <li>
            <a href="https://cct.sisge.space/" target="_blank" rel="noopener noreferrer" className="list-navbar" aria-label="Acceder a horarios">
              Horarios
            </a>
          </li>
          <li>
            <Link smooth to="/courses" className="list-navbar" aria-label="Ir a cursos">
              Cursos
            </Link>
          </li>
          <li>
            <Link smooth to="/instructors" className="list-navbar" aria-label="Ir a funcionarios">
              Funcionarios
            </Link>
          </li>
          <li>
            <a href="https://biblioteca.sena.edu.co/" target="_blank" rel="noopener noreferrer" className="list-navbar" aria-label="Ir a biblioteca">
              Biblioteca
            </a>
          </li>
        </ul>
      </div>
      <div className="buttons">
        <a href="http://senasofiaplus.edu.co/sofia-public/" target="_blank" rel="noopener noreferrer" className="list-navbar" aria-label="Acceder al sistema Sofia Plus">
          Acceder
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
