import axios from 'axios';

const api = axios.create({ baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1597931381&apikey=186993f127be4d139e97a5995c445efe&hash=dca31f91f5268c20d428ff58c8d7a235' });

export default api;
