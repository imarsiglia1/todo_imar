import axios from "axios";

export const publicRest = axios.create({
  baseURL: import.meta.env.VITE_API_URL_SERVER,
  headers: {
    accept: "application/json",
  },
});
