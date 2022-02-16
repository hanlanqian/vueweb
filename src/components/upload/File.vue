<template>
  <div>
    <el-table
      ref="FilesTable"
      :data="files"
      tooltip-effect="dark"
      style="width: 100%"
      :stripe="true"
      @select="selectEvent"
      @select-all="selectEvent"
    >
      <el-table-column type="selection" label="全选" align="center" width="55">
      </el-table-column>
      <el-table-column
        label="文件名称"
        align="center"
        prop="file_name"
        width="360"
      >
        <template slot-scope="scope">
          <el-link :href="file_get_path + scope.row.file_name">
            {{ scope.row.file_name }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="file_type"
        label="文件类型"
        align="center"
        width="200"
      >
      </el-table-column>
      <el-table-column prop="file_size" label="文件大小(kb) " align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" align="center">
        <template slot-scope="scope">
          <p>{{ scope.row.create_time | time_filter }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="更新时间"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <p>{{ scope.row.update_time | time_filter }}</p>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return { file_get_path: "http://124.223.105.216:2333/files/" };
  },
  computed: {
    ...mapState(["files"]),
  },
  mounted() {
  },
  methods: {
    selectEvent() {
      this.$refs.FilesTable.selection.forEach((select)=>{
        this.$store.state.fileSelectedList.push(select)
      })
    },
  },
};
</script>

<style>
.el-table__header .el-table-column--selection .cell .el-checkbox:after {
  color: #333;
  font-weight: bold;
  content: "全选";
  margin-left: 2px;
}
</style>
