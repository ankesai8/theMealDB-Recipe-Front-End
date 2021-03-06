import axios from "axios";

axios.defaults.baseURL = 'https://themealdb-99.herokuapp.com/';
axios.interceptors.request.use(
    (config)=>{
const token = localStorage.getItem('token');
const auth = token ? `Bearer ${token}`: '';
config.headers.common["Authorization"] = auth;
return config;
    },
    (err)=> Promise.reject(err)
);

export default axios;
