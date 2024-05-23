import axios from 'axios';

const API = axios.create({ baseURL: 'https://gitapi-backend-production-3d2c.up.railway.app/' });

export const getAllRepos = () => API.get('/getRepos/');
export const getOneRepo = (search:string) => API.get(`/getRepos/${search}`);