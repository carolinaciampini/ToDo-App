import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams() // obtener datos dinamicos de la URL
  
  useEffect(() => {

    async function  loadTask() {
      
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask()
  },[])

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate('/tasks');
  
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" {...register('title')} autoFocus className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />

        <textarea rows="3" name="" id="" {...register('description')} placeholder='Description' className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'></textarea>
          <button className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md">Save</button>
      </form>

      </div>
    </div>
  )
}


export default TaskFormPage