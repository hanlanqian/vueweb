<template>
  <div>
    <upload :server_host="server_host" :apis="apis" />
    <file :files="files" />
    <operater />
  </div>
</template>

<script>
import file from "../components/upload/File.vue";
import upload from "../components/upload/UploadFile.vue";
import operater from "../components/upload/Operater.vue";
import axios from "axios";

export default {
  name: "Upload",
  components: { file, upload, operater },
  data() {
    return {
      files: [],
      server_host: "http://124.223.105.216:2333",
      apis: {
        get_file: "/file/get",
        delete_file: "/file/delete",
        upload_file: "/file/upload",
      },
    };
  },
  computed: {
    selected_list() {
      var selected_list = [];
      this.files.forEach((file) => {
        if (file.ischecked) selected_list.push(file.file_name);
      });
      return selected_list;
    },
    // isSelectAll() {
    //   var isSelectAll = new Boolean();
    //   for (var i = 0; i < this.files.length; i++) {
    //     if (!this.files[i].ischecked) {
    //       isSelectAll = false;
    //       break;
    //     } else isSelectAll = true;
    //   }
    //   return isSelectAll;
    // },
  },
  created() {
    this.getdate();
  },
  mounted() {
    this.$bus.$on("selectAll", this.selectAll);
    this.$bus.$on("updateList", this.getdate);
    this.$bus.$on("delete_selected", this.delete_selected);
  },
  methods: {
    getdate() {
      axios.get(this.server_host + this.apis.get_file).then((response) => {
        var receieve_data = response.data.data;
        receieve_data.forEach((file) => {
          file.ischecked = false;
        });
        console.log(receieve_data);
        this.files = receieve_data;
      });
    },
    selectAll(ischecked) {
      if (ischecked)
        this.files.forEach((file) => {
          file.ischecked = true;
        });
      else
        this.files.forEach((file) => {
          file.ischecked = false;
        });
    },
    delete_selected() {
      console.log(this.selected_list);
      axios
        .post(this.server_host + this.apis.delete_file, this.selected_list)
        .then((response) => {
          console.log(response);
          this.getdate()
        });
    },
  },
};
</script>

<style>
</style>