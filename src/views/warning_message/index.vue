<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="内容">
        <el-input v-model="formInline.content" placeholder="内容"/>
      </el-form-item>
      <el-form-item label="任务状态">
        <el-select v-model="formInline.status_value" placeholder="状态">
          <el-option label="全部" value="0"/>
          <el-option label="待处理" value="-1"/>
          <el-option label="已关闭" value="1"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="warning_tableData"
      style="width: 100%">
      <el-table-column
        label="预警类别"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.warning_type }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="内容"
        width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.warning_content }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="发现时间"
        width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.discovery_time }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="处理时间"
        width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.processing_time }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.warning_status }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-tag size="small">已处理</el-tag>
          <el-tag size="small" type="warning">已处理</el-tag>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

export default {
  name: 'Terminal',
  data() {
    return {
      formInline: {
        content: '',
        status_value: ''
      },
      warning_tableData: [{
        warning_ID: '001',
        warning_type: '账号预警',
        warning_content: '组1内存超出',
        discovery_time: '2018-12-13 12:21:14',
        processing_time: '2018-12-13 12:21:14',
        warning_status: '1'
      }, {
        app_ID: '002',
        warning_type: '账号预警',
        warning_content: '组1内存超出',
        discovery_time: '2018-12-13 12:21:14',
        processing_time: '2018-12-13 12:21:14',
        warning_status: '1'
      }, {
        app_ID: '003',
        warning_type: '账号预警',
        warning_content: '组1内存超出',
        discovery_time: '2018-12-13 12:21:14',
        processing_time: '2018-12-13 12:21:14',
        warning_status: '1'
      }, {
        app_ID: '004',
        warning_type: '账号预警',
        warning_content: '组1内存超出',
        discovery_time: '2018-12-13 12:21:14',
        processing_time: '2018-12-13 12:21:14',
        warning_status: '1'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleEdit(index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
    },
    handleRemove(index, row) {
      console.log(index, row)
    },
    addGroup() {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding: 20px;
  }
</style>

