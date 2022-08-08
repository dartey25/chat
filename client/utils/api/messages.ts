//import { axios } from "../../core";
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:4000'
});

export default {
    getAllByDialogId: (id: number) => instance.get(`/messages?dialog=${id}`)
};