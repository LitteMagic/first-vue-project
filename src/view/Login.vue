<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {userRegisterServicce, userLoginServicce} from '@/api/user.js'

const isRegister = ref(false);

const registerData = ref({
  username: "",
  password: "",
  rePassword: ""
});

/**
 * 注册信息检验 - 再次输入密码检验规则
 * @param rule
 * @param value
 * @param callback
 */
const checkRePassword = (rule, value, callback) => {
  if (value === "") {
    // 密码为空
    callback(new Error('请再次输入密码'));
  } else if (value !== registerData.value.password) {
    // 两次密码输入不一致
    callback(new Error('两次密码不一致，请再次确认'));
  } else {
    // 验证通过
    callback();
  }
}

// 注册信息检验规则
const registerRules = {
  username: [
    {required: true, message: '用户名不得为空', trigger: 'blur'},
    {min: 6, max: 16, message: '用户名长度要求为6~16字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不得为空', trigger: 'blur'},
    {min: 6, max: 16, message: '密码长度为6~16字符', trigger: 'blur'}
  ],
  rePassword: [
    {validator: checkRePassword, trigger: 'blur'}
  ]
};

/**
 * 用户注册逻辑
 * @returns {Promise<void>}
 */
const register = async () => {
  const result = await userRegisterServicce(registerData.value);
  ElMessage.success(result.msg ? result.msg : "注册成功")

}

//导入路由
import {useRouter} from "vue-router";
const router = useRouter();
/**
 * 用户登录逻辑
 * @returns {Promise<void>}
 */
const login = async () => {
  const result = await userLoginServicce(registerData.value);
  ElMessage.success(result.msg ? result.msg : "登录成功")
//   将路由转换到主页面（layout）
  router.push("/");
}

/**
 * 页面表格转换为注册时处理逻辑
 */
const changeToRegister = () => {
  isRegister.value = true;
  clearRegisterData();
}

/**
 * 页面表格转化为登录时，处理逻辑
 */
const changeToLogin = () => {
  isRegister.value = false;
  clearRegisterData();
}


/**
 * 清空registerData中的数据
 */
const clearRegisterData = () => {
  registerData.value = {
    username: "",
    password: "",
    rePassword: ""
  }
}
</script>


<template>
  <el-row class="login-page">
    <el-col class="background" :span="12"></el-col>
    <el-col class="form" :span="6" :offset="3">
      <!--    注册表单-->
      <el-form ref="form" size="large" v-if="isRegister" :model="registerData" :rules="registerRules">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="registerData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="registerData.password"></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input type="password" placeholder="请再次输入密码" v-model="registerData.rePassword"></el-input>
        </el-form-item>
        <!--      注册按钮-->
        <el-form-item>
          <el-button class="button" type="primary" @click="register">
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" @click="changeToLogin">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <!--    登录表单-->
      <el-form ref="form" size="large" v-else :model="registerData" :rules="registerRules">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="registerData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" placeholder="请输入密码" type="password" v-model="registerData.password"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div>
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <!--      登录按钮-->
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="login">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" underline="false" @click="changeToRegister">注册 →</el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 90vh;
  width: 90vw;
  background: #f2f2f2;

  .background {
    background: url("@/assets/logo2.png") no-repeat 60% center / 240px auto,
    url("@/assets/login_bg.jpg") no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>