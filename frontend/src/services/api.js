import axios from "axios";
import { toast } from "react-hot-toast";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://industrial-knowledge-intelligence-production-ar.up.railway.app";

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method?.toUpperCase()} ${config.baseURL}${config.url}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request");
          break;

        case 401:
          toast.error("Unauthorized");
          break;

        case 403:
          toast.error("Access Denied");
          break;

        case 404:
          toast.error("Resource Not Found");
          break;

        case 500:
          toast.error("Internal Server Error");
          break;

        default:
          toast.error("Request Failed");
      }
    } else {
      toast.error("Backend Connection Failed");
    }

    return Promise.reject(error);
  }
);

export default api;