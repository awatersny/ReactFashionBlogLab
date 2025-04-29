import React from 'react'

export default function NavbarEl(props) {
  return (
    <li>
      <a class={props.navType} href="#">{props.link}</a>
    </li>
  )
}
