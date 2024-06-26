import axios from 'axios';

// create an axios instance
const service = axios.create({
    baseURL: '/',
    timeout: 5000,
});
// 请求拦截
service.interceptors.request.use(
    (config: any) => {
        config.headers['Content-Type'] = 'text/plain';
        config.headers['Authorization'] = 'Basic YWE6YWE=';
        return config;
    },
    (error: any) => {
        console.log('123');
    }
);

// 响应拦截
service.interceptors.response.use(
    (response: any) => {
        const res = response.data;
        if (res.code) {
            return res.data;
        } else {
            console.log('123');
        }
    },
    (error:any) => {
        console.log('123');
    }
);

export default service;
