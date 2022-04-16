import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank please fill this field!!!");
        } else{
            props.addTodo(title, desc);
        }
        setTitle("");
        setDesc("");
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submitTodo}>
            <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' id='exampleInputTitle' aria-describedby="titleHelp" />
                <div id='titleHelp' className='form-text'>This is your todo title its important!!!</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputDesc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className='form-control' id='exampleInputDesc' aria-describedby="descHelp" />
                <div id='descHelp' className='form-text'>Describe little bit about your todo</div>
            </div>
            <div>
                <button type='submit' className='btn btn-sm btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}
