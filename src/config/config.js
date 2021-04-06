import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_API_URL;
const API_VERSION = process.env.REACT_APP_VERSION_API;

const instance = axios.create({
    baseURL: `${BASE_URL}/${API_VERSION}`
})

//interceptory, nagłówki itd

export default instance;