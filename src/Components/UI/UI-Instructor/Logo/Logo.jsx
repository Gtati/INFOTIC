import React from 'react'
import LogoSENA from './../../../../assets/images/SENA.png'
import { HashLink as Link } from 'react-router-hash-link'
import './Logo.css'

export const Logo = () => {
  return (
    <img src={LogoSENA} alt="SENA" />
  )
}