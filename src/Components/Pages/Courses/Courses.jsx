import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { CardListCourses } from '../../UI/Card/Card-List-Courses'
import { Header } from '../../Layouts/Header/Header'

export const  Courses = () => {
  return (
    <>
      <Header titleText='Conoce nuestros cursos y carreras'/>
      <CardListCourses/>
      <Footer/>
    </>
  )
}
