import React from 'react'
import NavbarEl from './NavbarEl'

export default function Navbar(props) {
  return (
    <ul>
      {props.navLinks.map(link => <NavbarEl link={link}/>)}
    </ul>
  )
}
