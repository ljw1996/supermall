// 导入axios插件
import axios from 'axios'

// 网络封装  名称request
export function request(config) {
    const instance = axios.create({
            // baseURL: 'http://123.207.32.32:8000/api/hy',
            baseURL: 'http://106.54.54.237:8000/api/hy',
            // 延时不能超过8秒
            timeout: 8000,
        })
        // axios拦截器
        // 请求拦截
    instance.interceptors.request.use(config => {
            console.log(config);
            return config
        }), err => {
            console.log(err);
            return err
        }
        // 响应拦截
    instance.interceptors.response.use(res => {
        return res
    }), err => {
        return err
    }
    return instance(config)


}