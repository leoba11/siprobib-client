import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'http://localhost:7001/siprobib'
})

export default axiosInstance;