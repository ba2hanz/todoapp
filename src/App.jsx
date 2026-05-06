import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import './App.css'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  const updateTodo = (newtodo) => {
   const updatedTodos = todos.map((todo) => {
      if (todo.id === newtodo.id) {
        return newtodo;
      }
      return todo;
    })

    setTodos([...updatedTodos]);
  }
  


  return (
    <div className='App'>
      <div className='todo-create-container'>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} onRemoveTodo={deleteTodo} onUpdateTodo={updateTodo} />
      </div>
      
    </div>
  )
}

export default App
