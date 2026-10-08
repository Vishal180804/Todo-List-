import React from 'react'
import { Trash2 } from 'lucide-react'
const TodoItem = ({ todo, deleteTask }) => {
    return (
        <li>
            <div className='flex items-center justify-between p-4 my-3 mx-40 bg-blue-500 rounded-lg'>
                <p className='text-2xl'>
                    {todo}
                </p>

                <button onClick={() => deleteTask(todo)}
                    className='text-red-500 hover:text-red-700'>
                    <Trash2 className='w-4 h-4 sm:w-5 sm:h-5' />
                </button>
            </div>
        </li>
    )
}

export default TodoItem