<template>
  <el-menu mode="horizontal" router>
    <el-menu-item
      v-for="(item, index) in catalogue"
      :key="index"
      :index="item.path"
      >{{ item.label }}</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      catalogue: [
        { name: "Login", path: "/", label: "登入"},
        { name: "Home", path: "/home", label: "主页" },
        { name: "UploadFile", path: "/Upload", label: "上传文件" },
        { name: "UserInfo", path: "/UserInfo", label: "用户信息" },
      ],
    };
  },
};
</script>

<style>
</style>