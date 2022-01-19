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
              <el-option
                v-for="item in addressList"
                :key="item.addressid"
                :label="item.addressname"
                :value="item.addressid"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 等级 -->
          <el-form-item label="等级">
            <el-select v-model="messageForm.levelid" placeholder="请选择等级">
              <el-option
                v-for="item in levelList"
                :key="item.jrid"
                :label="item.levelname"
                :value="item.jrid"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 上传微信头像 -->
          <el-form-item label="上传头像">
            <el-upload
              action="http://47.92.82.13:4000/getMessageA"
              :file-list="fileList"
              name="sfile"
              :on-success="txUpload"
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
              action="http://47.92.82.13:4000/getMessageB"
              :file-list="fileList"
              name="sweixin"
              :on-success="wxUpload"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button
              v-if="isUpdate"
              type="primary"
              @click="updateMessageHandle('messageForm')"
              >修改</el-button
            >
            <el-button
              v-else
              type="primary"
              @click="addMessageHandle('messageForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('messageForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getLevel } from "@/api/level.js";
import { getAddress } from "@/api/address.js";
import { addMessage, messageId, updateMessage } from "@/api/message.js";
export default {
  data() {
    return {
      loading: false,
      isUpdate: false,
      messageForm: {
        uname: "",
        tel: "",
        addressid: "",
        levelid: "",
        tcoin: "",
        weixin: "",
      },
      fileList: [],
      levelList: [],
      addressList: [],
    };
  },
  methods: {
    // 添加信息
    addMessageHandle(formName) {
      this.$refs[formName].validate((res) => {
        if (res) {
          addMessage({ ...this.messageForm }).then((res) => {
            console.log(res);
            this.$router.push("/message/list");
          });
        }
      });
    },
    // 头像上传成功
    txUpload(res) {
      this.messageForm.tcoin = res.headerurl;
    },
    // 二维码上传成功
    wxUpload(res) {
      this.messageForm.weixin = res.weixinurl;
    },
    // 获取等级列表
    getLevelData() {
      return new Promise((resolve, reject) => {
        getLevel()
          .then((res) => {
            this.levelList = res.data;
            resolve();
          })
          .catch(() => {
            console.log("error!");
          });
      });
    },
    // 获取地址列表
    getAddressData() {
      return new Promise((resolve, reject) => {
        getAddress()
          .then((res) => {
            this.addressList = res.data;
            resolve();
          })
          .catch(() => {
            console.log("error!");
          });
      });
    },
    // 重置表单
    resetForm(formName){
        this.$refs[formName].resetFields();
    },
    // 初始化页面
    initPage() {
      console.log("开始加载页面");
      this.loading = true;
      let levelPromise = this.getLevelData();
      let addressPromise = this.getAddressData();
      Promise.all([levelPromise, addressPromise]).then(() => {
        this.loading = false;
        console.log("结束加载页面");
      });
    },
    // 根据id获取信息
    getMessageById() {
      messageId({
        id: this.$route.query.id,
      }).then((res) => {
        console.log(res);
        this.messageForm = {
          uname: res.data[0].jrname,
          tel: res.data[0].jrtel,
          addressid: res.data[0].jraddressid,
          levelid: res.data[0].jrlevel,
          tcoin: res.data[0].tcoin,
          weixin: res.data[0].weixin,
        };
      });
    },
    // 修改信息
    updateMessageHandle() {
      let { uname, addressid, levelid, tel } = this.messageForm;
      updateMessage({
        id: this.$route.query.id,
        uname,
        addressid,
        levelid,
        tel,
      }).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.initPage();
    if (this.$route.query.id) {
      this.getMessageById();
      this.isUpdate = true;
    }
    //   console.log(this.$route.query);
    //   console.log(this.$route.params);
    // this.getLevelData();
    // this.getAddressData();
  },
};
</script>