<template>
  <div>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <div>
          <el-upload
            ref="upload"
            multiple
            drag
            :auto-upload="false"
            :action="server_host + apis.upload_file"
            :limit="10"
            :data="file_info"
            :file-list="fileList"
            :before-upload="beforeUpload"
            :before-remove="beforeRemove"
            :on-success="successUpload"
            :on-change="onChange"
          ></el-upload>
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-button size="small" type="primary" @click="uploadButton"
      >点击上传
    </el-button>
    <el-button size="small" type="primary" @click="clearAll">
      清空待上传文件
    </el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      fileList: [],
      file_info: {},
    };
  },
  computed: {
    ...mapState(["apis", "server_host"]),
  },
  methods: {
    onChange(file, fileList) {
      this.fileList = fileList;
    },
    uploadButton() {
      if (this.fileList.length === 0) {
        this.$message({
          message: "您还未选择任何文件！",
          type: "warning",
        });
        return;
      }
      this.$confirm("确定上传所有文件吗？")
        .then(async () => {
          console.log(this.$refs.upload.submit());
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消全部上传",
          });
        });
    },
    beforeUpload(file) {
      this.file_info.file_name = file.name.length > 60 ? file.name.substring(0, 60) : file.name
      this.file_info.file_size = file.size / 1024 / 1024;
      this.file_info.file_type = file.type.length > 60 ? file.type.split("/")[0] : file.type;
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    clearAll() {
      this.$refs.upload.clearFiles();
    },
    successUpload(response, file, fileList) {
      this.$message({
        type: "success",
        message: "上传成功!",
      });
      setTimeout(() => {
        fileList.splice(fileList.indexOf(file.name), 1);
      }, 500);

      this.$store.dispatch("get_data");
    },
  },
};
</script>

<style scoped>
</style>