//https://api.themoviedb.org/3/


import axios, { Axios } from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default api;