import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <div className='todo-create-container'>
      <TodoCreate />
      <TodoList />
      </div>
      
    </div>
  )
}

export default App
