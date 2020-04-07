<template>
  <div id="app">
    <Login msg="欢迎来到登录页面"/>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  margin: -8px -8px 0px -8px;
}
</style>
