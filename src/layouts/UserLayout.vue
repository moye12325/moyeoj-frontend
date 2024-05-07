<template>
  <div id="UserLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo" />
          <div>莫叶 OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/moye12325" target="_blank">
          编程导航 by Moye
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#UserLayout {
}

#UserLayout .logo {
  width: 40px;
  height: 40px;
}

#UserLayout .header {
  //background: red;
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#UserLayout .content {
  background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#UserLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
