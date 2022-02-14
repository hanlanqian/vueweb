<template>
  <tr>
    <td>
      <input type="checkbox" v-model="file.ischecked" :id="file.id" />
    </td>
    <td>
      <a :href="fill_get_path + file.file_name" download="">{{
        file.file_name
      }}</a>
    </td>
    <td>{{ file.file_type }}</td>
    <td>{{ file.file_size }}</td>
    <td>{{ file.create_time | time_filter }}</td>
    <td>{{ file.update_time | time_filter }}</td>
  </tr>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
      fill_get_path: "http://124.223.105.216:2333/files/",
    };
  },
  props: ["file"],
};
</script>

<style scoped>
a:hover {
  color: hotpink;
  text-decoration: underline;
}

a {
  text-decoration: none;
}
tr:hover {
  background-color: rgb(216, 210, 210);
}
</style>