import axios from 'axios'

const host ="http://localhost:8000/api"

const custom_axios = axios.create({
    baseURL: host,
})



export default custom_axios;
