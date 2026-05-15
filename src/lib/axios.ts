import axios from "axios";

// import.meta.env.VITE_API_URL ||

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
