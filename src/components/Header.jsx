import React from 'react'

export default function Header(props) {
  return (
    <div class={props.className}>
      {props.content}
    </div>
  )
}
