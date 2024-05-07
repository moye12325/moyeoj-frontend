<template>
  <div class="login-container">
    <h2>User Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="userAccount">Account</label>
        <input
          type="text"
          id="userAccount"
          placeholder="Please enter your account number"
          v-model="loginForm.userAccount"
          required
        />
      </div>
      <div class="input-group">
        <label for="userPassword">Password</label>
        <input
          type="password"
          id="userPassword"
          placeholder="Please enter the password"
          v-model="loginForm.userPassword"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
const loginForm = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

/**
 * 提交信息
 */
const handleLogin = async () => {
  console.log("Login Details:", loginForm);
  // 通常这里会调用一个API来处理登录
  // alert(JSON.stringify(loginForm));
  const res = await UserControllerService.userLoginUsingPost(loginForm);
  if (res.code === 0) {
    // alert("登录成功" + JSON.stringify(loginForm));
    await store.dispatch("user/getLoginUser");
    store.commit("user/updateUser", res.data);
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败" + res.message);
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
