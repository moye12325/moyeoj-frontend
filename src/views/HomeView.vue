<template>
  <div class="home">
    <MdEdit :value="MdValue" :handle-change="onMdChange" />
    <CodeEdit :value="codeValue" :handle-change="onCodeChange" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MdEdit from "@/components/MdEdit.vue";
import CodeEdit from "@/components/CodeEdit.vue"; // @ is an alias to /src

const MdValue = ref();
const codeValue = ref();

const onMdChange = (v: string) => {
  MdValue.value = v;
};
const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>
