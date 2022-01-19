<template>
    <div>
        <h1>子页面一</h1>
        {{msg}}
        <div id="main"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            msg:""
        }
    },
    mounted() {
        var myChart = echarts.init(document.getElementById('main'));
    },
    created() {
        let str = this.$route.params.userName;
        this.msg = str;
    },
}
</script>
<style scoped>
#main{
    width: 400px;
    height: 200px;
}
</style>