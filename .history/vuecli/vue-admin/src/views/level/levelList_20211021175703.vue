<template>
  <div>
    <template>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="jrid" label="ID"> </el-table-column>
      <el-table-column prop="levelname" label="等级名称"> </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
    </template>
  </div>
</template>

<script>
import { getLevel } from "@/api/level.js";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    getList() {
      getLevel().then((res) => {
        console.log(res);
        this.dataList = res.data
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>