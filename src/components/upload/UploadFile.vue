<template>
  <div>
    <el-row type="flex" justify="center">
      <el-button size="small" type="success" @click="uploadButton"
        >点击上传到服务器
      </el-button>
      <el-button size="small" type="primary" @click="clearAll">
        清空待上传文件
      </el-button>
    </el-row>
    <el-row type="flex" justify="center">
      <el-upload
        ref="upload"
        multiple
        drag
        :auto-upload="false"
        :action="server_host + apis.upload_file"
        :limit="file_limit"
        :data="file_info"
        :file-list="fileList"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :on-success="successUpload"
        :on-exceed="exceedHandel"
      >
        <el-row>
          <i class="el-icon-upload"></i>
        </el-row>
        <el-row>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-row>
      </el-upload>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      fileList: [],
      file_info: {},
      file_limit: 3,
    };
  },
  computed: {
    ...mapState(["apis", "server_host"]),
  },
  methods: {
    uploadButton() {
      if (this.$refs.upload.uploadFiles.length === 0) {
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
      this.file_info.file_name =
        file.name.length > 60 ? file.name.substring(0, 60) : file.name;
      this.file_info.file_size = file.size / 1024 / 1024;
      this.file_info.file_type =
        file.type.length > 60 ? file.type.split("/")[0] : file.type;
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
        this.$refs.upload.clearFiles();
      }, 1000);

      this.$store.dispatch("get_data");
    },
    exceedHandel(file, fileList) {
      this.$message.error(`单次上传文件数不能超过${this.file_limit}个！`);
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
</style>