/**
 * 创建Axios实例并且返回
 */

// 导入Axios
import axios from 'axios';
import {useTokenStore} from "@/store/token.js";
import {ElMessage} from 'element-plus';
const baseURL = '/api';
const instance = axios.create({baseURL});

// 配置请求拦截器
instance.interceptors.request.use(
    (config) => {
        const tokenStore = useTokenStore();
        // 判断store中有无token
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token;
        }
        return config;
    },
    (error) => {
        // 请求错误的回调
        return Promise.reject(error);
    }
);

// 配置响应拦截器
instance.interceptors.response.use(
    (result) => {
        // 判断业务代码，0表示正常
        if(result.data.status === 0){
            return result.data;
        }

    //     操作失败
        alert(result.data.message ? result.data.message : '服务异常');
        // 异步操作的状态转换为失败
        return Promise.reject(result.data);
    },
    (error) => {
        // 如果响应状态码为401，证明未登录，提示用户登录并且跳转到登录页面
        if (error.response.status === 401) {
            ElMessage.error('请先登录');
        }else{
            ElMessage.error('请先登录');
        }
        // 异步状态转变为失败状态
        return Promise.reject(error);
    }
)

// 导出创建的实例
export default instance;