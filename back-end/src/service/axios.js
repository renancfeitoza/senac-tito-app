const axios = require('axios');

const api = axios.create({
    baseURL: 'http://viacep.com.br/ws/01001000/json',
});

module.exports = api