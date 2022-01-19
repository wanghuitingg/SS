<template>
  <div>
    <template>
      <el-table :data="dataList" style="width: 100%">
        <el-table-column prop="jrid" label="ID"> </el-table-column>
        <el-table-column prop="levelname" label="等级名称"> </el-table-column>
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
import { getLevel, delLevel } from "@/api/level.js";
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
    deleteLevel(item) {
      console.log(item);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delLevel({
            levelid: item.jrid,
          }).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>