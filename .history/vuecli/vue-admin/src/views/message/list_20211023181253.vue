<template>
  <div>
      <el-form :inline="true">
  <el-form-item label="选择地址">
    <el-select v-model="searchAddress" placeholder="请选择地址">
      <el-option label="区域一" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item>
    <el-button type="primary">查询</el-button>
    <el-button @click="searchAddress=''">重置</el-button>
  </el-form-item>
</el-form>
    <el-table :data="messageData" style="width: 100%">
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="jrname" label="姓名"> </el-table-column>
      <el-table-column prop="addressname" label="地址"> </el-table-column>
      <el-table-column prop="jrlevel" label="等级"> </el-table-column>
      <el-table-column prop="jrtel" label="手机号"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
            icon="el-icon-edit"
          >
            编辑
          </el-button>
          <el-button
            @click.native.prevent="deleteMessage(scope.row)"
            type="text"
            size="small"
            icon="el-icon-delete"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMessage, delMessage } from "@/api/message.js";
export default {
  data() {
    return {
        searchAddress:"",
      messageData: [],
    };
  },
  methods: {
    // 删除信息
    deleteMessage(item) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delMessage({
            id: item.jrid,
          }).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 获取信息
    getData() {
      getMessage().then((res) => {
        this.messageData = res.data;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>