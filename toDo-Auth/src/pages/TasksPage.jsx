import { useEffect } from "react"
import { useTasks } from "../context/TasksContext.jsx"
import TaskCard  from '../components/TaskCard.jsx'

function TasksPage() {
  const { getTasks, tasks = [] } = useTasks();
  
  useEffect(() => {
    getTasks()
  }, []);

  if (tasks.length === 0) return (<h1>No tasks yet</h1>);
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.length >= 0 ? (
        tasks.map((task) => (
          <TaskCard task={task} key={task._id}></TaskCard>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}


export default TasksPage