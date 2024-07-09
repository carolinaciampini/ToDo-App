import { createContext, useContext, useState, useEffect } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task.js";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest()
      console.log("Response from getTasksRequest:", res.data); // Depuración
      setTasks(res.data)

    } catch (err) {
      console.log(err)
    }

  }

  const createTask = async (task) => {
    const res = await createTaskRequest(task)
    console.log(res)
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      getTasks,
    }}>
      {children}
    </TaskContext.Provider>
  )
}