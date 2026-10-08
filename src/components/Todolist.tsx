import React from 'react'
import TodoItem from './TodoItem'
const Todolist = ({todos,deleteTask}) => {
  return (
    <ul>
        {
            todos.map((todo,index)=>(
                <TodoItem key={index} todo={todo} deleteTask={deleteTask}/>
            ))
        }
    </ul>
  )
}

export default Todolist