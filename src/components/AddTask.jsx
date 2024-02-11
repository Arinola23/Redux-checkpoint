import { useState } from 'react'
import { useDispatch } from 'react-redux'
import  { addTask } from '../JS/taskSlice.js'

const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    

    const handleAddTask =() => {
        if(task === '')
    alert('You must type something')
        if(task.trim() !== '') {
            dispatch(addTask({
                id: Date.now(),
                description: task,
                isDone: false
            }));

            setTask('')
        }
}
    return (
        <div className ="add-task">
            <h1>To-Do-List
              <svg class="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
             <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v2H7V2ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 4H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2Zm0-4H8a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Z"/>
             </svg>
           </h1>
            <div className='input'>
                 <input 
                 type="text"
                 value ={task}
                 onChange = {(e) => setTask(e.target.value)}
                placeholder='Add new task...'
                />
              <button onClick={handleAddTask}>Add task</button>
         </div>
        </div>
    )
}

export default AddTask;