<template>
  <div>
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
import { getMessage,delMessage } from "@/api/message.js"
export default {
  data() {
    return {
      messageData:[]
    };
  },
  methods: {
      // 删除信息
      deleteMessage(item){
          delMessage({
              id:item.jrid
          }).then((res)=>{
              this.getData()
          })
      },
      // 获取信息
      getData(){
          getMessage().then((res)=>{
              this.messageData = res.data
          })
      }
  },
  created() {
      this.getData()
  },
};
</script>