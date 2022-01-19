<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form :model="messageForm" ref="messageForm" label-width="100px">
          <!-- 姓名 -->
          <el-form-item
            label="姓名"
            prop="uname"
            :rules="[{ required: true, message: '请填写姓名' }]"
          >
            <el-input v-model="messageForm.uname"></el-input>
          </el-form-item>
          <!-- 电话 -->
          <el-form-item
            label="电话号码"
            prop="tel"
            :rules="[{ required: true, message: '请填写电话号码' }]"
          >
            <el-input v-model="messageForm.tel"></el-input>
          </el-form-item>
          <!-- 地址 -->
          <el-form-item label="地址">
            <el-select v-model="messageForm.addressid" placeholder="请选择地址">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <!-- 等级 -->
          <el-form-item label="等级">
            <el-select v-model="messageForm.levelid" placeholder="请选择等级">
              <el-option v-for="item in levelList" :key="item.jrid" :label="item.levelname" value="item.jrid"></el-option>
              
            </el-select>
          </el-form-item>
          <!-- 上传微信头像 -->
          <el-form-item label="上传头像">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <!-- 上传微信二维码 -->
          <el-form-item label="上传二维码">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getLevel } from "@/api/level.js"
export default {
  data() {
    return {
      messageForm: {},
      fileList: [],
      levelList:[]
    };
  },
  methods: {
      // 获取等级列表
      getLevelData(){
          getLevel().then((res)=>{
              this.levelList= res.data
          })
      }
  },
  created() {
      this.getLevelData()
  },
};
</script>