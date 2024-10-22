import React from 'react'
import {Header} from './../../Layouts/Layouts-Courses/Header/Header'
import { Footer } from '../../Layouts/Footer/Footer'
import { CardListCourses } from '../../UI/Card/Card-List-Courses'

export const  Courses = () => {
  return (
    <>
      <Header/>
      <CardListCourses/>
      <Footer/>
    </>
  )
}
