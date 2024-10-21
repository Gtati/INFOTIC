import React from 'react'
import { Header } from './../../Layouts/Layouts-Instructors/Header/Header'
import { Footer } from '../../Layouts/Footer/Footer'
import { CardList } from '../../UI/Card/Card-List'
import './Instructor.css'

export const Instructors = () => {
  return (
    <>
      <Header />
      <CardList/>
      <Footer/>
    </>
  )
}