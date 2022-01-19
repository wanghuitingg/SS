<template>
  <div>
    <template>
      <el-table :data="dataList" style="width: 100%">
        <el-table-column prop="jrid" label="ID"> </el-table-column>
        <el-table-column prop="levelname" label="等级名称"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteLevel(scope.$index, dataList)"
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
import { getLevel,delLevel } from "@/api/level.js";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    // 获取等级列表
    getList() {
      getLevel().then((res) => {
        console.log(res);
        this.dataList = res.data;
      });
    },
    // 删除等级
    deleteLevel(index,data){
      console.log(index,data);
      // delLevel({
      //   levelid:item.jrid
      // }).then((res)=>{
      //   console.log(res);
      // })
    }
  },
  created() {
    this.getList();
  },
};
</script>