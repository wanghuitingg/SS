<template>
  <div class="content">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form
          :model="levelForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="等级名称"
            prop="levelName"
            :rules="[
            { required: true, message: '请填写等级列表' }
            ]"
          >
            <el-input 
                v-model="levelForm.levelName"
                ></el-input>
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
          levelForm:{
            levelName:""
        }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.levelForm.levelName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.content{
    margin-top: 100px;
}
</style>