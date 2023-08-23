import React from 'react'

export default function Smdata(props) {
  return (
    <div>
      <h1>UserName : {props.name}</h1>
      <h1>id : {props.id}</h1>
      <h1>age : {props.age}</h1>
      <h1>isActive : {props.active}</h1>
      <h1>institute : {props.institute}</h1>


    </div>
  )
}
