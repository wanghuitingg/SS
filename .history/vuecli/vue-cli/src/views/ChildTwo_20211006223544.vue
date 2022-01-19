<template>
  <div>
    <h1>子页面二</h1>
    {{ msg }}
    <baidu-map class="map"> </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    this.msg = this.$route.query.age;
  },
};
</script>
<style scoped>
.map{
    width: 100%;
    height: 300px;
}
</style>