// 导入request.js工具
import request from '@/util/request.js';

/**
 * 用户注册逻辑
 * @param registerData
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const userRegisterServicce = (registerData) => {
    //使用urlSearchParams来完成传参
    const params = new URLSearchParams();
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }

    return request.post('/user/register', params);
}

/**
 * 用户登录逻辑
 * @param loginData 用户登录数据
 */
export const userLoginServicce = (loginData) => {
    const params = new URLSearchParams();
    for (let key in loginData) {
        params.append(key, loginData[key]);
    }

    return request.post('/user/login', params);
}