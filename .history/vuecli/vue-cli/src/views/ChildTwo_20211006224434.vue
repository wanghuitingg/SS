<template>
  <div>
    <h1>子页面二</h1>
    {{ msg }}
    <baidu-map class="map" center="北京">
      <bm-overview-map
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"
      ></bm-overview-map>
    </baidu-map>
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
    this.msg = this.$route.query.text;
  },
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>