<template>
  <div id="app">
    <el-menu mode="horizontal" router>
      <el-menu-item
        v-for="(item, index) in catalogue"
        :key="index"
        :index="item.path"
        >{{ item.label }}</el-menu-item
      >
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      catalogue: [
        { name: "Home", path: "/home", label: "主页" },
        { name: "UploadFile", path: "/Upload", label: "上传文件" },
        { name: "UserInfo", path: "/UserInfo", label: "用户信息" },
      ],
    };
  },
  components: {
  },
};
</script>


    DisplayArea<style>
body {
  background: #fff;
}
</style>
