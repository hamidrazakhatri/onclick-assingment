import React from 'react'
// import '../app.css'

function Smbutton(props) {
  return (
    <div>
      <button onClick={props.onclick} className='btn'>{props.label}</button>
    </div>
  )
}

export default Smbutton
