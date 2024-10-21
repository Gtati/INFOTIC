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
        <h2 className='title'>InfoTIC</h2>
      </ul>
      <ul className='itemNavbar'>
        <li>
          <Link smooth to='/' className='list-navbar'>
       Horarios
          </Link>
        </li>
        <li>
          <Link smooth to='/' className='list-navbar'>
            Cursos
          </Link>
        </li>
        <li>
          <Link smooth to='/' className='list-navbar'>
          Funcionarios
          </Link>
        </li>
      </ul>
      <div className='buttons'>
        <Link smooth to='/' className='btn'>
        Acceder
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
