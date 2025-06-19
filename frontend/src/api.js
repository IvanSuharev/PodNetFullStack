import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8181',
    withCredentials: true,
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// api.js
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.data) {
            error.response.data =
                error.response.data.message ||
                error.response.data.error ||
                "Неизвестная ошибка";
        }
        return Promise.reject(error);
    }
);

export default api;