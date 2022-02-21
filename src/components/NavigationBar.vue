<template>
  <el-menu
    ref="navigation"
    mode="horizontal"
    @select="select"
  >
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
        { name: "Login", path: "/login", label: "登录" },
        { name: "Home", path: "/home", label: "主页" },
        { name: "UploadFile", path: "/Upload", label: "上传文件" },
        { name: "UserInfo", path: "/UserInfo", label: "用户信息" },
      ],
      publicPages: ["/home", "/login"],
    };
  },
  mounted() {
    this.$refs.navigation.activeIndex = this.$route.fullPath
  },
  methods: {
    select(index, indexPath) {
      if (this.$store.state.isLogin || this.publicPages.indexOf(index) >= 0)
        this.$router.replace(index);
      else {
        this.$message.error("你还没有登入！暂无权限访问该页面");
        this.$router.replace("login");
        this.$refs.navigation.activeIndex = "/login";
      }
    },
  },
};
</script>

<style>
</style>