import React from 'react';
import { Logo } from '../../UI/UI-Instructor/Logo/Logo';
import { Title } from '../../UI/UI-Instructor/Title/Title';
import { HomeIcon } from '../../UI/UI-Instructor/Home-Icon/Home-Icon';
import './Header.css';

export const Header = ({titleText}) => {
  return (
    <>
      <header>
        <Logo />
        <Title text={titleText} />
        <HomeIcon />
      </header>
      <hr className='line' />
    </>
  );
};
