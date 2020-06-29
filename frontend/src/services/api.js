import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ImmaculateOrganicRuntimes--five-nine.repl.co',
});

export default api;