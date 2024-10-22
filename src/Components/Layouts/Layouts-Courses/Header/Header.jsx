import React from 'react'
import { Logo } from '../../../UI/UI-Instructor/Logo/Logo'
import { Title } from '../../../UI/UI-Instructor/Title/Title'
import { HomeIcon } from '../../../UI/UI-Instructor/Home-Icon/Home-Icon'

export const Header = () => {
  return (
    <header>
      <Logo/>
      <Title text='Descubre nuestros cursos'/>
      <HomeIcon/>
    </header>
  )
}
