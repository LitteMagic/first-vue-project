/**
 * 创建Axios实例并且返回
 */

// 导入Axios
import axios from 'axios';
const baseURL = '/api';
const instance = axios.create({baseURL});

// 配置请求拦截器
instance.interceptors.request.use(
    (config) => {

    }
);


// 导出创建的实例
export default instance;