import axios from 'axios';

const Service = axios.create({
    baseURL: process.env.MOCK_URL,
    timeout: 180000
})


const request = (method, url, data, config = {} ) => {
    const options = Object.assign({}, config, {
        url,
        method,
        data
    });
    options.headers = options.headers || {};
    return new Promise((resolve, reject) => {
        Service.request(options)
            .then(res => {
                resolve(res)
            })
            .catch(res => {
                reject(res)
            })
    })
}

export const ajax = {
    get: (url, config) => (
        request('get', url, null, config)
    ),
    post: (url, data, config) => {
        if (!config.headers) {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        return request('post', url, data, config)
    }
}