<template>
    <div>
        <h1>子页面三</h1>
        <h1>{{msg}}</h1>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:""
        }
    },
    created() {
        this.msg = this.$route.params.username
    },
}
</script>