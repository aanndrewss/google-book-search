import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://www.googleapis.com/books/v1/',
    headers: {
        'API-KEY': 'e7fb4dc4-a634-4d6a-ae1d-34f1fb748836'
    }
})