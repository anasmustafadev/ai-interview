import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://0d41-34-19-78-133.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
});

export default apiClient;
