import React from 'react'
import { FaRegTrashAlt, FaRegEdit, FaRegCheckCircle } from "react-icons/fa";
import { useState } from 'react';
import '../App.css';

function Todo({todo, onRemoveTodo, onUpdateTodo}) {
  const {id, content} = todo;

  const [editable, setEditable] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const updateTodo = () => {
    onUpdateTodo({id: id, content: editedContent});
    setEditable(false);
  }

  return (
    <div className='todo'>
        <div>
            {
              editable ? 
              <input style={{width: '380px'}} type="text" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className='todo-input' />
              :
              content
            }
        </div>
        <div>
            <FaRegTrashAlt onClick={() => (onRemoveTodo(id))} className='todo-icon'/>
              {editable ? <FaRegCheckCircle className='todo-icon' onClick={() => updateTodo()}/> 
              : <FaRegEdit className='todo-icon' onClick={() => setEditable(true)}/>}
        </div>
    </div>
  )
}

export default Todo