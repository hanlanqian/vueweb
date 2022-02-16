<template>
  <div>
    <uploadFile/>
    <file/>
    <operater />
  </div>
</template>

<script>
import file from "../components/upload/File.vue";
import uploadFile from "../components/upload/UploadFile.vue";
import operater from "../components/upload/Operater.vue";
import axios from "axios";
import {mapState} from 'vuex'

export default {
  name: "Upload",
  components: { file, uploadFile, operater },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
    this.getdata()
  },
  mounted() {
    this.$bus.$on("selectAll", this.selectAll);
    this.$bus.$on("updateList", this.getdata);
    this.$bus.$on("delete_selected", this.delete_selected);
  },
  methods: {
    getdata() {
      this.$store.dispatch("get_data")
    },
    delete_selected() {
      this.$store.dispatch("delete_selected_file")
    },
  },
};
</script>

<style>
</style>