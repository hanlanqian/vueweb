<template>
  <el-container>
    <el-header><navigation-bar></navigation-bar></el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { NavigationBar },
};
</script>


<style scoped>
  .el-container{
    height: 100%;
    background-color: antiquewhite;
  }
</style>
