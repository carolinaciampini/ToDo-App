import { useTasks } from "../context/TasksContext";
import {Link} from 'react-router-dom'

function TaskCard({ task }) {
 const {deleteTask} = useTasks()
  return (
    <div className="bg-zinc-700 max-w-md w-full p-10 rounded-md" >
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button onClick={() => {
            deleteTask(task._id)
          }} className="bg-red-700 hover:bg-red-400 text-white px-4 py-2 rounded-md"> DELETE </button>
          <Link to={`/tasks/${task._id}`} className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md" >EDIT</Link>
        </div>
     </header>
      <p className="text-slate-300">{task.description}</p>

      {/* Aca se muestra la fecha de la tarea */}
      {/*<p>{new Date(task.date).toLocaleDateString()}</p> */}
    </div>
  )
};

export default TaskCard;