import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let TodoStyle = {
    minHeight : "80vh",
  }
  let demoStyle = {
    marginTop : "4%",
  }
  return (
    <div className='container my-3' style={TodoStyle}>
        <h3 className='my-3'>My Todo List</h3>
        {props.todos.length === 0 ? <img style={demoStyle} className='App-logo' src='.../public/logo192.png' alt='No Todo to display'/> : props.todos.map((todo) => {
          return <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
        })}
        {}
        
    </div>
  )
}
