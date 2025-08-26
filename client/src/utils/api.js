import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const getSongs = async () => {
  const response = await instance.get('/songs');
  return response.data;
};

export const uploadSong = async (songData) => {
  const response = await instance.post('/songs', songData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await instance.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await instance.post('/auth/register', userData);
  return response.data;
};
