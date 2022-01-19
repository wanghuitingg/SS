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
          <el-form-item
            label="等级"
            prop="levelid"
            :rules="[{ required: true, message: '请填写等级' }]"
          >
            <el-input v-model="messageForm.levelid"></el-input>
          </el-form-item>
          <!-- 微信头像 -->
          <el-form-item
            label="微信头像"
            prop="tcoin"
            :rules="[{ required: true, message: '请填写微信头像' }]"
          >
            <el-input v-model="messageForm.tcoin"></el-input>
          </el-form-item>
          <!-- 微信二维码 -->
          <el-form-item
            label="微信二维码"
            prop="weixin"
            :rules="[{ required: true, message: '请填写微信二维码' }]"
          >
            <el-input v-model="messageForm.weixin"></el-input>
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
export default {
  data() {
    return {
      messageForm: {},
    };
  },
};
</script>