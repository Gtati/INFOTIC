import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { CardList } from '../../UI/Card/Card-List'
import './Instructor.css'
import { Header } from '../../Layouts/Header/Header'

export const Instructors = () => {
  return (
    <>
      <Header titleText='Conoce a nuestros funcionarios'/>
      <CardList/>
      <Footer/>
    </>
  )
}