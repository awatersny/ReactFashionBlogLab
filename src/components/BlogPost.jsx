import React from 'react'

export default function BlogPost(props) {
  return (
    <div>
      <div>{props.date}</div>
      <div>{props.title}</div>
      <img src={props.image} alt={props.image} />
      <div>{props.content}</div>
    </div>
  )
}
