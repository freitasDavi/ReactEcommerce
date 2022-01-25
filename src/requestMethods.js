import axios from 'axios';

const BASE_URL = "http://localhost:5002/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGNmMTg0OGViNzkxYjY1MGJhNTVlZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzEzMDA3MCwiZXhwIjoxNjQzMzg5MjcwfQ.wMbdKFe0XkA_iQx9dXuRcK3rncKTxxw0XvfA9woLzFc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});