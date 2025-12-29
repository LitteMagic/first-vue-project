import {createRouter,createWebHistory} from "vue-router";

//导入组件
import LoginVue from "@/view/login.vue";
import LayoutVue from "@/view/layout.vue";

import ArticleCategoryVue from "@/view/article/ArticleCategory.vue";
import ArticleManageVue from "@/view/article/ArticleManage.vue";
import UserAvatarVue from "@/view/user/UserAvatar.vue";
import UserInfoVue from "@/view/user/UserInfo.vue";
import UserResetPasswordVue from "@/view/user/UserResetPassword.vue";

//定义路由
const routes = [
    {path:"/login", component:LoginVue},
    {path: "/", component: LayoutVue,
        redirect:"/article/category",
    children: [
        {path:"/article/category", component:ArticleCategoryVue},
        {path: "/article/manage", component:ArticleManageVue},
        {path: "/user/avatar", component:UserAvatarVue},
        {path:"/user/info", component:UserInfoVue},
        {path:"/user/resetPassword", component:UserResetPasswordVue},
    ]},
]

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

//导出路由
export default router;