<template>
  <div class="content" v-loading="loading">
    <div ref="testref"></div>
    <el-row>
      <el-col :span="6" :offset="6">
        <el-form :model="addressForm" ref="formAddress" label-width="100px">
          <el-form-item
            label="地址名称"
            prop="address"
            :rules="[{ required: true, message: '请填写地址名称' }]"
          >
            <el-input v-model="addressForm.address"></el-input>
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
            <el-button :loading="true" type="primary" @click="submitForm('formAddress')"
              >提交</el-button
            >
            <el-button @click="resetForm('formAddress')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { addAddress } from "@/api/address.js";
export default {
  data() {
    return {
      loading: false,
      addressForm: {
        address: "",
        longitude: "",
        latitude: "",
      }, 
    };
  },
  methods: {
    // 提交数据 
    submitForm(formName) {
      this.$refs[formName].validate((res) => {
        // console.log(res);
        addAddress({ ...this.addressForm }).then((res)=>{
            this.$router.push("/address/list_address");
            console.log(res);
        })
      });
      // console.log(this.$refs.testref);
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>