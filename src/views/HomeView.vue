<template>
  <div class="home">
    <MdEdit :value="value" :handle-change="onChange" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MdEdit from "@/components/MdEdit.vue"; // @ is an alias to /src

const value = ref();
const onChange = (v: string) => {
  value.value = v;
};
</script>
