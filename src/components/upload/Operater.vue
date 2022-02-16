<template>
  <div>
    <el-button size="medium" round @click="download_selected">下载</el-button>
    <el-button size="medium" round type="warning" @click="delete_selected"
      >删除</el-button
    >
  </div>
</template>

<script>
export default {
  name: "operater",
  methods: {
    delete_selected() {
      this.$store.dispatch("delete_selected_file")
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