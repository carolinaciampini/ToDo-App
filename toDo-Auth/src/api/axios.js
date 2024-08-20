import axios from "axios";

console.log('Base URL:', import.meta.env.VITE_API_BASE_URL);

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials : true
});

export default instance