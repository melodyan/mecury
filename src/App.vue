<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  /*
  首页link和import语法结构不同，前者<link>是html标签，只能放入html源代码中使用，后者可看作为css样式，
  作用是引入css样式功能。import在html使用时候需要<style type="text/css">标签，
  同时可以直接“@import url(CSS文件路径地址);”放如css文件或css代码里引入其它css文件。
   */
  @import url("./style/index.scss");
</style>


