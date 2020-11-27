import Axios from 'axios';

const api = Axios.create({
    baseURL: ' https://pizzaria-gaino-api.herokuapp.com/'
});

export default api;