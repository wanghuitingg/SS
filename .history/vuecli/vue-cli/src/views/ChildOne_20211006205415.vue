<template>
  <div>
    <h1>子页面一</h1>
    {{ msg }}
    <div id="main"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
  created() {
    let str = this.$route.params.userName;
    this.msg = str;
  },
};
</script>
<style scoped>
#main {
  width: 400px;
  height: 400px;
  display: none;
}
</style>