<template>
  <div>
    <template>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="jrid" label="ID"> </el-table-column>
      <el-table-column prop="levelname" label="等级名称"> </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
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