<template>
  <div>
    <table>
      <tr>
        <td><input type="checkbox" @change="selectAll" />全选</td>
        <td :colspan="4">服务器文件列表</td>
      </tr>
      <tr>
        <td>选中文件</td>
        <td>文件名称</td>
        <td>文件类型</td>
        <td>文件大小(kb)</td>
        <td>创建时间</td>
        <td>更新时间</td>
      </tr>
      <item v-for="file in files" :key="file.id" :file="file"></item>
    </table>
  </div>
</template>

<script>
import item from "./Item.vue";
export default {
  data() {
    return {};
  },
  components: {
    item,
  },
  methods: {
    selectAll(e){
      this.$bus.$emit('selectAll', e.target.checked)
    }
  },
  props: ["files"],
};
</script>

<style>
table {
  align-content: center;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  position: relative;
  width: 100%;
  border-collapse: collapse;
}

td {
  font-family: "Fira Sans";
  align-content: center;
  border: 1px solid burlywood;
  border-radius: 3px;
  text-align: center;
}




* {
  font-family: "Segoe UI";
}
</style>