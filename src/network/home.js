// 请求集合文件

// 导入封装好的网络请求文件
import { request } from './request';

// 获取首页所有数据
export function getHomeAlldata() {
    return request({
        url: './home/multidata'
    })
}