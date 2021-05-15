<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { provide } from "vue";
export default {
  name: "App",
  setup() {
    const userDatas = [
      { userId: 0, userName: "Kai example 000" },
      { userId: 1, userName: "Kai example 001" },
      { userId: 2, userName: "Kai example 002" },
    ];
    provide("userDatas", userDatas);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
