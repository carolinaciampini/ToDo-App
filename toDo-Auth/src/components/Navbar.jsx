import React from "react";
import { Link } from "react-router-dom";
import { useAuth} from "../context/AuthContext";



function Navbar() {

  const { isAuthenticated,logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to='/'><h1 className="text-2xl font-bold">Task Manager</h1></Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="font-semibold mx-4 ">
              Welcome {user.username}!
            </li>
            <li>
              <Link to='/add-task' className="bg-slate-500 px-4 py-1 rounded-sm" >Add Task</Link>
            </li>
            <li>
              <Link to='/tasks' className="bg-slate-500 px-4 py-1 rounded-sm" >Your Tasks</Link>
            </li>
            <li>
              <Link to='/' onClick={() => {
                logout()
              }} className="bg-slate-500 px-4 py-1 rounded-sm">Logout </Link>
            </li>
          </>
        ): (
          <>
              <li>
                <Link to='/register' className="bg-slate-500 px-4 py-1 rounded-sm">Register</Link>
              </li>
              <li>
                <Link to='/login' className="bg-slate-500 px-4 py-1 rounded-sm">Login</Link>
              </li>
            </>
        )}
        
      </ul>

    </nav>
  )
}

export default Navbar;