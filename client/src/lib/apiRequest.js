import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://localhost:4507/api",
    withCredentials: true,
});

export default apiRequest;