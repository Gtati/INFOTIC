import React from 'react'
import { IoHome } from 'react-icons/io5'
import { HashLink as Link} from 'react-router-hash-link'
import './Home-Icon.css'


export const HomeIcon = () => {
  return (
    <Link smooth to='/'>
          <IoHome className='HomeIcon'/>
    </Link>
  )
}