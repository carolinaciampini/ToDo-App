import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-4 flex flex-wrap items-center justify-center md:justify-between py-4 px-6 md:px-11 rounded-lg">
      <div className="flex items-center">
        <Link to={isAuthenticated ? '/tasks' : '/'} className="text-white text-3xl font-bold flex items-center">
          
          TO DO TASKS
        </Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        {isAuthenticated ? (
          <>
            <div className="hidden md:flex items-center mr-4">
              <p className="text-white text-lg">Hey {user.username}, great to see you here!</p>
            </div>
            <div className="flex items-center">
              <Link to='/add-task' className="bg-slate-500 px-3 py-1 rounded-sm text-base md:text-lg text-white mr-2 md:mr-4">Add Task</Link>
              <Link to='/tasks' className="bg-slate-500 px-3 py-1 rounded-sm text-base md:text-lg text-white mr-2 md:mr-4">Your Tasks</Link>
              <Link to='/' onClick={() => logout()} className="bg-slate-500 px-3 py-1 rounded-sm text-base md:text-lg text-white">Logout</Link>
            </div>
          </>
        ) : (
            <div className="flex">
              <Link to='/register' className="  bg-slate-500 px-3 py-1 rounded-sm text-base md:text-lg text-white mr-2 md:mr-4">Register</Link>
              <Link to='/login' className="  bg-slate-500 px-3 py-1 rounded-sm text-base md:text-lg text-white">Login</Link>
            </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;



