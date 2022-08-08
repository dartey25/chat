const axios = require('axios');

//axios.defaults.baseURL = 'https://localhost:4000';
console.log(axios)
const instance = axios.create({
    baseURL: 'http://localhost:4000'
});
export default instance;