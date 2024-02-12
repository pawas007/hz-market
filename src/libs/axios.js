import axios from 'axios'

const axiosIns = axios.create({
    baseURL: import.meta.env.VITE_API_DEFAULT_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})
axiosIns.defaults.withCredentials = false

export default axiosIns