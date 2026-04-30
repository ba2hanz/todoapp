import React from 'react'
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

function Todo() {
  return (
    <div className='todo'>
        <div>
            İLK TODO
        </div>
        <div>
            <FaRegTrashAlt className='todo-icon'/>
            <FaRegEdit className='todo-icon'/>
        </div>
    </div>
  )
}

export default Todo