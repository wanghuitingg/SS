<template>
  <div>
    <template>
      <el-table v-loading="loading" :data="dataList" style="width: 100%">
        <el-table-column prop="addressid" label="ID"> </el-table-column>
        <el-table-column prop="addressname" label="地址"> </el-table-column>
        <el-table-column prop="longitude" label="地址经度"> </el-table-column>
        <el-table-column prop="latitude" label="地址纬度"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteAddress(scope.row)"
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
import { getAddress, delAddress } from "@/api/address";
export default {
  data() {
    return {
      dataList: [],
      loading: false,
    };
  },
  methods: {
    // 获取地址
    getData() {
      this.loading = true;
      getAddress().then((res) => {
        this.dataList = res.data;
        this.loading = false;
      });
    },
    // 删除地址
    deleteAddress(item) {
      this.loading = true;
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delAddress({
            addressid: item.addressid,
          }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getData();
            this.loading = false;
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
    this.getData();
  },
};
</script>