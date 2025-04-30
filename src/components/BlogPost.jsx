import React from 'react'

export default function BlogPost(props) {
  return (
    <div class="blog-post">
      <div class="date">{props.date}</div>
      <div class="blog-title">{props.title}</div>
      <img src={props.image} alt={props.image} />
      <div class="blog-content">{props.content}</div>
      <h5>Continue...</h5>
    </div>
  )
}