<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="选择地址">
        <el-select v-model="searchAddress" placeholder="请选择地址">
          <el-option
            v-for="item in addressList"
            :key="item.addressid"
            :label="item.addressname"
            :value="item.addressid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchHandle">查询</el-button>
        <el-button @click="resetSearch">重置</el-button>
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
          <el-button @click="updateBtn(scope.row)"
            type="text"
            size="small"
            icon="el-icon-edit"
          >
            修改
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
import { getMessage, delMessage, messageAddress } from "@/api/message.js";
import { getAddress } from "@/api/address.js";

export default {
  data() {
    return {
      searchAddress: "",
      messageData: [],
      addressList: [],
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
    //  获取地址
    getAddressList() {
      getAddress().then((res) => {
        this.addressList = res.data;
      });
    },
    // 根据地址查询信息
    searchHandle() {
        let address = "";
        this.addressList.map((item)=>{
            if (item.addressid == this.searchAddress) {
                address = item.addressname;
            }
        })
      messageAddress({
        searchid: this.searchAddress,
      }).then((res) => {
        console.log(res);
        this.messageData = res.data.map((item)=>{
            item.addressname = address;
            return item
        })
        // this.messageData = res.data
      });
    },
    // 重置搜索
    resetSearch(){
        this.searchAddress = '';
        this.getData();
    },
    // 修改按钮
    updateBtn(item){
        console.log(item);
    }
  },
  created() {
    this.getData();
    this.getAddressList();
  },
};
</script>