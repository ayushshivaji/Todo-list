import { useState } from 'react'

function todo(props) {
  let id = "todo-"+props.value
  let divid = "todo div-"+id;
  return (
    <div className={divid}>
      <input type="checkbox" id={id} name="todo" onChange={props.onChange} checked={props.checked}/>
      <label name="todo" id={id} htmlFor={id}>{props.value}</label>
    </div>
  )
}

export default todo