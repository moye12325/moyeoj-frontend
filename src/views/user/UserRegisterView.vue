<template>
  <div class="register-container">
    <h2>User Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="input-group">
        <label for="userAccount">Account</label>
        <input
          type="text"
          id="userAccount"
          placeholder="Please enter your account number"
          v-model="registerForm.userAccount"
          required
        />
      </div>
      <div class="input-group">
        <label for="userPassword">Password</label>
        <input
          type="password"
          id="userPassword"
          placeholder="Please enter your password"
          v-model="registerForm.userPassword"
          required
        />
      </div>
      <div class="input-group">
        <label for="checkPassword">Confirm Password</label>
        <input
          type="password"
          id="checkPassword"
          placeholder="Please confirm your password"
          v-model="registerForm.checkPassword"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const registerForm = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});

const router = useRouter();

const handleRegister = async () => {
  if (registerForm.userPassword !== registerForm.checkPassword) {
    message.error("Passwords do not match");
    return;
  }

  const res = await UserControllerService.userRegisterUsingPost(registerForm);
  if (res.code === 0) {
    message.success("Register success");
    router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    message.error("Register failed: " + res.message);
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 10px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>
