<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

const route = useRoute();

const doInit = () => {
  console.log("Hello");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  //仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.LoginUser?.role !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
