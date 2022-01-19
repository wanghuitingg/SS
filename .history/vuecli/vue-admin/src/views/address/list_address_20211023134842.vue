<template>
  <div>
    列表
  </div>
</template>

<script>
import {getAddress} from "@/api/address"
export default {
  data() {
    return {
      dataList:[]
    }
  },
  methods: {
    // 获取地址
    getData(){
      getAddress().then((res)=>{
        console.log(res);
      })
    }
  },
}
</script>