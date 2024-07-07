import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/registerPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/tasks" element={<h1>All tasks page</h1>}></Route>
          <Route path="/add-task" element={<h1>Create Task page</h1>}></Route>
          <Route path="/tasks/:id" element={<h1>Update task page</h1>}></Route>
          <Route path="/profile" element={<h1>Profile page</h1>}></Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
 )
}

export default App
