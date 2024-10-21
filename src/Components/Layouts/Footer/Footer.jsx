import React from 'react'
import { OfficeHours } from '../../UI/Footer/Office-Hours/Office-Hours'
import { FooterInformation } from '../../UI/Footer/Footer-Information/Footer-Information'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <FooterInformation/>
      <OfficeHours/>    
    </footer>
  )
}
