<template>
  <div>
    <button>下载</button>
    <button @click="delete_selected">删除</button>
  </div>
</template>

<script>
export default {
    name: 'operater',
    props: ['delete_select'],
    methods: {
      delete_selected(){
        this.$bus.$emit('delete_selected')
      }

    },
};
</script>

<style scoped>
button {
  margin-top: 10px;
  border: 1px solid rgb(218, 120, 120);
  background-color: transparent;
  border-radius: 4px;
  height: 10%;
  width: 20%;
  align-content: center;
}

div {
  text-align: center;
}
</style>