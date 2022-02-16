<template>
  <el-row>
    <el-button size="medium" round @click="download_selected">下载</el-button>
    <el-button size="medium" round type="warning" @click="delete_selected"
      >删除</el-button
    >
  </el-row>
</template>

<script>
export default {
  name: "operater",
  methods: {
    delete_selected() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("delete_selected_file");
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    download_selected() {},
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>