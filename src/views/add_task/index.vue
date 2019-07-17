<template>
  <div class="app-container">
    <el-form ref="form" :model="form" size="mini" label-width="180px">

      <el-form-item label="任务类型">
        <el-select v-model="form.task_type" placeholder="请选择活动区域">
          <el-option label="安装" value="-2"/>
          <el-option label="卸载" value="-1"/>
          <el-option label="启动" value="0"/>
          <el-option label="停止" value="1"/>
        </el-select>
      </el-form-item>

      <el-form-item label="应用分组">
        <el-select v-model="form.app_group" placeholder="应用分组">
          <el-option label="程序A" value="0"/>
          <el-option label="程序B" value="1"/>
        </el-select>
      </el-form-item>

      <el-form-item label="应用名称">
        <el-select v-model="form.app_name" placeholder="应用名称">
          <el-option label="采集Av0.1.jar" value="0"/>
          <el-option label="采集Av0.2.jar" value="1"/>
          <el-option label="采集Av1.0.jar" value="2"/>
        </el-select>
      </el-form-item>

      <el-form-item label="目标终端">
        <div>选中列表</div>
        <el-transfer
          v-model="value5"
          :props="{
            key: 'value',
            label: 'desc'
          }"
          :data="data3"/>
      </el-form-item>

      <el-form-item>
        <el-button>返回列表</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  name: 'AddTask',
  data() {
    const generateData3 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      form: {
        task_type: '',
        app_group: '',
        app_name: ''
      },
      data3: generateData3(),
      value5: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding: 20px;
  }
</style>

