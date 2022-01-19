<template>
  <div class="content" v-loading="loading">
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
            :rules="[{ required: true, message: '请填写等级列表' }]"
          >
            <el-input v-model="levelForm.levelName"></el-input>
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
      levelForm: {
        levelName: "",
      },
    };
  },
};
</script>