import axios from "axios";

const accessURL = import.meta.env.VITE_NODE_ENV==='development'?import.meta.env.VITE_ACCESS_LOCAL_URL:import.meta.env.VITE_ACCESS_LIVE_URL

const axiosInstance= axios.create({
    baseURL:accessURL,
    headers:{
        'Content-Type':'application/json',
        'auth-token': localStorage.getItem('auth-token')?JSON.parse(localStorage.getItem('auth-token')):null
    }
})

export default axiosInstance;