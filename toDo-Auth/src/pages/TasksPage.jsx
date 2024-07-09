import { useEffect } from "react"
import { useTasks } from "../context/TasksContext.jsx"


function TasksPage() {
  const { getTasks, tasks = [] } = useTasks();
  
  useEffect(() => {
    getTasks()
  }, [])
  
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}


export default TasksPage