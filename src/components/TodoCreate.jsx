import React from 'react'
import '../App.css'

function TodoCreate() {
  return (
    <div className='todo-create'>
      <input className='todo-input' type="text" placeholder='Add a new todo' />
      <button className='todo-button'>Add</button>
    </div>
  )
}

export default TodoCreate