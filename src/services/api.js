import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';

export const fetchUsers = page => axios.get(`users/?page=${page}`);

export const fetchUserById = id => axios.get(`users/${id}`);
