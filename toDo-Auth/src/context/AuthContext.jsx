import {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true)

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err)
      setErrors(err.response.data)
    }
   
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
        setUser(res.data);
       setIsAuthenticated(true);
      // setErrors([]);
    } catch (err) {
      if (Array.isArray(err.response.data)) {
        return setErrors(err.response.data);
      }
      return setErrors([err.response.data.message]);
    }

  }

  const logout = () => {
    Cookies.remove("token")
    setIsAuthenticated(false);
    setUser(null)
  };

  // espera 4 segundos para eliminar los errores
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [errors])

    // cookies
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        return setUser(null);
        
      }

      try {
        const res = await verifyTokenRequest(cookies.token)
        if (!res.data) {
          setIsAuthenticated(false)
          setLoading(false);
          return;
        }
          
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin()

  },[])


 
  return (
    <AuthContext.Provider value={{
      signUp, signIn, logout, user, isAuthenticated, errors, loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}