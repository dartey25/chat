//import {axios} from "../../core";
//import axios from "axios";
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:4000'
});

export default {
    getAll: () => instance.get("/dialogs")
};