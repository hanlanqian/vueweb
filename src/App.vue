<template>
  <el-container>
    <el-header><navigation-bar></navigation-bar></el-header>
    <el-container><router-view></router-view></el-container>
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


    DisplayArea<style>
body {
  background: #fff;
}
</style>
