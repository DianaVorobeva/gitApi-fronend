import axios from 'axios';

const API = axios.create({ baseURL: 'https://gitapi-backend-production-3d2c.up.railway.app/' });


export const getReposGitApi = () => API.get('/api/');
