<template>
  <div>
    <ul>
      <li v-for="(category, index) in catalogue" :key="index">
        <router-link :to="category.path">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      catalogue: [
        { name: "UserInfo", path: "/UserInfo" },
        { name: "UploadFile", path: "/Upload" },
        {name:'Home', path:'/home'}
      ],
    };
  },
};
</script>

<style>
</style>