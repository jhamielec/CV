import React from "react";

export function Section(props) {
  let type;
  if (props.type===undefined) {type='text'}
  else {type=props.type}
  return (
    <div>
        <label htmlFor={props.name}>{props.name}   </label>
        <input 
          type={type}
          id={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          />
        
      <br/>
    </div>
  )
}
  