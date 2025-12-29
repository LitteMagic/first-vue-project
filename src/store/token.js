// 定义store
// store可以简单理解为“公共数据存放区”
import {defineStore} from 'pinia';
import {ref} from "vue";
//定义token的闭包
const myStoreImpl = () => {
    const token = ref('');
    const setToken = (newToken) => {
        token.value = newToken
    };
    const removeToken = () => {
        token.value = ''
    };
    return {token, setToken, removeToken};
}


export const useTokenStore
    = defineStore('token', myStoreImpl, {persist: true});