<template>
  <div class="app-container">
    <el-row>
      <el-col :span="16">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="通用参数" name="first">
            <el-form :model="common_form" size="mini">
              <el-form-item label="邮件地址1：">
                <el-input v-model="common_form.email_1"/>
              </el-form-item>
              <el-form-item label="邮件地址2：">
                <el-input v-model="common_form.email_2"/>
              </el-form-item>
              <el-form-item label="邮件地址3：">
                <el-input v-model="common_form.email_3"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="离线预警" name="second">
            <el-form :model="offline_warning_form" size="mini">
              <el-form-item label="判断为离线心跳更新间隔（大于等于分钟）：">
                <el-input v-model="offline_warning_form.minute"/>
              </el-form-item>
              <el-form-item label="触发警告终端台数总数（大于等于台）：">
                <el-input v-model="offline_warning_form.num"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="负载预警" name="third">
            <el-form :model="load_warning_form" size="mini">
              <el-form-item label="CPU占有率过高（大于等于%）：">
                <el-input v-model="load_warning_form.CPU_GT"/>
              </el-form-item>
              <el-form-item label="[或者]内存占有率过高（大于等于%）：">
                <el-input v-model="load_warning_form.mem_GT"/>
              </el-form-item>
              <el-form-item label="[或者]磁盘占有率过高（大于等于%）：">
                <el-input v-model="load_warning_form.disk_GT"/>
              </el-form-item>
              <el-form-item label="[或者]触发警告终端台数总数（大于等于台）：">
                <el-input v-model="load_warning_form.number"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName2: 'first',
      common_form: {
        email_1: '12345678@qq.com',
        email_2: '12345678@qq.com',
        email_3: '12345678@qq.com'
      },
      offline_warning_form: {
        minute: 120,
        num: 12
      },
      load_warning_form: {
        CPU_GT: 50,
        disk_GT: 80,
        mem_GT: 80,
        number: 120
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>

</style>
