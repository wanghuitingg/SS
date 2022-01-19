<template>
  <div>
    <template>
      <el-table :data="dataList" style="width: 100%">
        <el-table-column prop="addressid" label="ID"> </el-table-column>
        <el-table-column prop="addressname" label="地址"> </el-table-column>
        <el-table-column prop="longitude" label="地址经度"> </el-table-column>
        <el-table-column prop="latitude" label="地址纬度"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteLevel(scope.row, dataList)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
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
  created() {
    this.getData()
  },
}
</script>