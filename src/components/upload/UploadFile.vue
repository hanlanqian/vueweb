<template>
  <div>
    <input ref="inputFile" type="file" @change="getfile" multiple="multiple" />
    <button @click="upload_file">提交文件</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      Files: new FormData(),
    };
  },
  props: ["server_host", "apis"],
  methods: {
    getfile(e) {
      var files = e.target.files;

      for (var i = 0; i < files.length; i++) {
        this.Files.append(`data_${i}`, files[i]);
        this.Files.append(
          `fileinfo_${i}`,
          JSON.stringify({
            file_name: files[i].name,
            file_size: files[i].size / 1024 / 1024,
            file_type: files[i].type,
          })
        );
      }
    },
    upload_file() {
      axios({
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        url: this.server_host + this.apis.upload_file,
        data: this.Files,
      }).then((response) => {
        console.log(response)
        this.Files = new FormData();
        this.$bus.$emit("updateList");
        this.$refs.inputFile.value = ''
      });
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid rgb(218, 120, 120);
  background-color: transparent;
  border-radius: 2px;
}
</style>