import Axios from 'axios'
import { isDev } from '../utils/utils';

export const  commonRequest = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
    timeout: 8000,
    withCredentials: !isDev()
})

commonRequest.interceptors.request.use(
    config => {
        if ('localStorage' in global) {
            const token = localStorage.getItem('token');
            if (token && config.url.indexOf('auth') === -1) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)

commonRequest.interceptors.response.use(function (response) {
    return response;
}, function(error) {
    return Promise.reject(error)
})