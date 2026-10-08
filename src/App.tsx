import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist';

const App = () => {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([]);


  const addTask = () => {

    if (task.trim() === "") return;
    setTodos([...todos, task])
    console.log(task, "task added.")
    setTask('')
  }

  const deleteTask = (taskToDelete) => {
    setTodos(
      todos.filter(
        (todo) => todo !== taskToDelete
      )
    )
  }

  return (
    <div className='w-full min-h-screen bg-blue-400'>
      <h1 className='text-5xl font-extrabold text-blue-800 text-center p-4'>To-do List</h1>
      <TodoForm task={task} setTask={setTask} addTask={addTask} />
      {
        todos.length > 0 ? (
          <Todolist todos={todos} deleteTask={deleteTask} />
        )
          :
          (<p className='text-xl text-center m-4'>No tasks available.</p>)
      }

    </div>
  )
}

export default App