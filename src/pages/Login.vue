<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :sm="24" :lg="6" :xl="5">
      <el-row>
        <el-form
          ref="loginForm"
          :model="form"
          label-position="right"
          status-icon
          label-width="100px"
          :rules="rules"
        >
          <el-form-item>
            <template slot="label">
              <el-button
                v-show="isRegister"
                round
                icon="el-icon-back"
                @click="backLogin"
                >返回登录</el-button
              >
            </template>
          </el-form-item>
          <el-form-item v-show="!isRegister" label="用户名" prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="form.username"
              clearable
              >用户名</el-input
            >
          </el-form-item>
          <el-form-item v-show="!isRegister" label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              show-password
              clearable
              v-model="form.password"
              >密码</el-input
            >
          </el-form-item>

          <el-form-item v-show="isRegister" label="用户名" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item v-show="isRegister" label="手机号" prop="phoneNumber">
            <el-input
              placeholder="请输入手机号"
              clearable
              v-model="form.phoneNumber"
            ></el-input>
          </el-form-item>
          <el-form-item v-show="isRegister" label="邮箱" prop="email">
            <el-input
              placeholder="请输入邮箱"
              clearable
              v-model="form.email"
            ></el-input>
          </el-form-item>
          <el-form-item v-show="isRegister" label="密码" prop="passWord">
            <el-input
              placeholder="请输入密码"
              show-password
              clearable
              v-model="form.passWord"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-show="isRegister"
            label="确认密码"
            prop="checkPassword"
          >
            <el-input
              placeholder="请再次输入密码"
              show-password
              clearable
              v-model="form.checkPassword"
            ></el-input>
          </el-form-item>
          <el-form-item v-show="isRegister" label="性别" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
              <el-radio label="未知"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button v-show="!isRegister" @click="login" @keyup.enter="login">登入</el-button>
        <el-button type="success" @click="register">注册</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        // 登录表格
        username: "",
        password: "",

        // 注册表格
        userName: "",
        passWord: "",
        checkPassword: "",
        phoneNumber: "",
        email: "",
        sex: "",
      },
      rules: {
        username: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入用户名"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 16, message: "长度不超过16个字符", trigger: "blur" },
        ],
        passWord: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请输入密码"));
              } else if (this.form.checkPassword !== "") {
                this.$refs.loginForm.validateField("checkPassword");
              }
              callback();
            },
            trigger: "blur",
          },
          { required: true },
        ],
        checkPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次确认密码"));
              } else if (value !== this.form.passWord) {
                callback(new Error("两次密码不一致"));
              } else callback();
            },
            trigger: "blur",
          },
          { required: true },
        ],
      },
      isRegister: false,
      loginList: ["username", "password"],
    };
  },
  methods: {
    login() {
      if (
        this.form.username === "hanlanqian" &&
        this.form.password === "testwyh"
      ) {
        this.$store.state.isLogin = true;
        this.$message({
          message: "登录成功！",
          type: "success",
        });
        this.$router.push("/home");
      } else {
        this.$message.error("账号或密码错误！");
      }

      // if (!this.form.username) this.$message.error("请输入用户名");
      // else if (!this.form.password) this.$message.error("请输入密码");
      // else {
      //   this.$store.dispatch("login_auth", this.form);
      // }
    },

    register() {
      if (!this.isRegister) this.isRegister = true;
      else {
        this.$refs.loginForm.validate((valid, info) => {
          var error_keys = Object.keys(info);
          if (error_keys.toString() == this.loginList.toString()) {
            console.log(123);
            this.$store.dispatch("register", this.form);

            this.$message({
              message: "已成功提交注册",
              type: "success",
            });
          } else {
            this.$message({
              message: "提供信息错误，请重新检查",
              type: "error",
            });
          }
        });
      }
    },
    backLogin() {
      this.isRegister = false;
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  height: 96%;
}
</style>>
