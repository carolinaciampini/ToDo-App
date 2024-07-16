import { useAuth } from "../context/AuthContext";
import React from "react";

function HomePage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex items-center justify-center  min-h-[90vh]">
      <div className="p-12 rounded text-center mb-12">
        <h1 className="text-7xl font-bold text-white">Welcome!</h1>
        <p className="mt-6 text-4xl  text-white">The best way to manage your daily tasks efficiently and easily.</p>
      </div>
    </div>
  );
}

export default HomePage