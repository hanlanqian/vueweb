<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center" align="middle">
        <el-form v-model="form">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="form.username"
              >用户名</el-input
            >
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              show-password
              v-model="form.password"
              >密码</el-input
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button @click="login">登入</el-button>
        <el-button type="success">注册</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (!this.form.username) this.$message.error("请输入用户名");
      else if (!this.form.password) this.$message.error("请输入密码");
      else {
          this.$store.dispatch("login_auth", this.form)
      }
    },
  },
};
</script>

<style>
</style>