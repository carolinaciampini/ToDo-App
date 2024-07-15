import { createContext, useContext, useState, useEffect } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/task.js";

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
      // console.log("Response from getTasksRequest:", res.data); // Depuración
      setTasks(res.data)

    } catch (err) {
      console.log(err)
    }

  }

  const createTask = async (task) => {
    const res = await createTaskRequest(task)
    console.log(res)
  };

  const deleteTask = async (id) => {

    try {
      const res = await deleteTaskRequest(id);
        if(res.status === 204) setTasks(tasks.filter(task => task._id !== id))
    } catch(err) {
      console.log(err)
    }
   
    
  }

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data
    } catch (err) {
      console.error("Error in getTask:", err);
    }
  }

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
   
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
      getTasks,
      getTask,
      updateTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}