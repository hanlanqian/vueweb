<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavigationBar,
  },
};
</script>


    DisplayArea<style>
body {
  background: #fff;
}
</style>
