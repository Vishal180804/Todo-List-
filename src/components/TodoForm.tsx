import React from 'react'
import { Plus } from 'lucide-react'

const TodoForm = ({ task, setTask, addTask }) => {
    return (
        <div className="w-full max-w-md mx-auto flex gap-2">
            <input
                className="w-full h-10 sm:h-12 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-black placeholder-black outline-none focus:ring-2 focus:ring-white/30 text-sm sm:text-base"
                type='text' value={task} placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
            <button
                className="h-10 sm:h-12 aspect-square rounded-full bg-white/20 backdrop-blur-md text-black hover:bg-white/30 transition-colors disabled:opacity-50 flex items-center justify-center"
                onClick={addTask}
            >
               <Plus className='w-4 h-4 sm:w-5 sm:h-5'/>
            </button>
        </div>
    )
}

export default TodoForm