import React from 'react'
import logoSena from '../../../../assets/Images/logoSena.png'
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='header'>
      <ul className='info1'>
        <Link smooth to='/'>
          <img src={logoSena} alt="Logo Sena" className="logo" />
        </Link>
        <h1 className='title-page'>InfoTIC</h1>
      </ul>
      <ul className='itemNavbar'>
        <li>
          <a href='https://cct.sisge.space/' target='_blank' rel='noopener noreferrer' className='list-navbar'>
            Horarios
          </a>
        </li>
        <li>
          <Link smooth to='/courses' className='list-navbar'>
            Cursos
          </Link>
        </li>
        <li>
          <Link smooth to='/instructors' className='list-navbar'>
            Funcionarios
          </Link>
        </li>
        <li>
          <a href='https://biblioteca.sena.edu.co/' target='_blank' rel='noopener noreferrer' className='list-navbar'>
            Biblioteca
          </a>
        </li>
      </ul>
      <div className='buttons'>
        <a href='http://senasofiaplus.edu.co/sofia-public/' target='_blank' rel='noopener noreferrer' className='list-navbar'>
          Acceder
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
