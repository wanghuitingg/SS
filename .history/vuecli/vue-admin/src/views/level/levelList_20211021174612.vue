<template>
  <div>
    <el-table
      :data="dataList"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getLevel } from "@/api/level.js"
    export default {
      data() {
        return {
          dataList:[]
        }
      },
      methods: {
        getList(){
          getLevel().then((res)=>{
            console.log(res);
          })
        }
      },
      created() {
        this.getList()
      },
    }
  </script>