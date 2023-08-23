import React from 'react'

export default function Smtable(props) {
  return (
    <div>
      <table border={3}>
  <tr>
    <th>{props.heading1}</th>
    <th>{props.heading2}</th>
    <th>{props.heading3}</th>
  </tr>
  <tr>
    <td>{props.content1}</td>
    <td>{props.content2}</td>
    <td>{props.content3}</td>
  </tr>
  <tr>
    <td>{props.content4}</td>
    <td>{props.content5}</td>
    <td>{props.content6}</td>
  </tr>
</table>
    </div>
  )
}
