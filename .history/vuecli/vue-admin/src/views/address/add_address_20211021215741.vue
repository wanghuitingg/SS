<template>
  <div class="content" v-loading="loading">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form
          :model="addressForm"
          label-width="100px"
        >
          <el-form-item
            label="地址名称"
            prop="addressName"
            :rules="[{ required: true, message: '请填写地址名称' }]"
          >
            <el-input v-model="addressForm.addressName"></el-input>
          </el-form-item>
          <el-form-item
            label="地址经度"
            prop="longitude"
            :rules="[{ required: true, message: '请填写地址经度' }]"
          >
            <el-input v-model="addressForm.longitude"></el-input>
          </el-form-item>
          <el-form-item
            label="地址纬度"
            prop="latitude"
            :rules="[{ required: true, message: '请填写地址纬度' }]"
          >
            <el-input v-model="addressForm.latitude"></el-input>
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
      loading: false,
      addressForm: {
        addressName: "",
        longitude:"",
        latitude:""
      },
    };
  },
};
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>