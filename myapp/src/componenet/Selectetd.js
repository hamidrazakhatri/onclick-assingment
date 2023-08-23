import React from "react";

export default function Smselect(props) {
  return (
    <div>
      <label for="">{props.label}</label>

      <select id="cars">
        <option value={props.value1}>{props.value1}</option>
        <option value={props.value2}>{props.value2}</option>
      </select>
    </div>
  );    
}
