import React from 'react'

export const TodoItem = (props) => {
  let todoStyle = {
    backgroundColor : "blue",
    color : "white",
    padding : "12px",
    marginTop : "8px"
  }
  return (
    <div className='container' style={todoStyle}>
      <h5>{props.todo.sno}</h5>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
