<template>
    <div>
        <h1>子页面三</h1>
        {{msg}}
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