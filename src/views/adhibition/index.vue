<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="formInline.appName" placeholder="应用名称"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="应用名称"
        width="320">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.app_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="终端台数"
        width="320">
        <template slot-scope="scope">
          <span>{{ scope.row.terminal_num }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="240">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)">详细</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="程序部署分布列表">
      <el-form :model="form">
        <el-table
          :data="deployment_tableData"
          style="width: 100%">
          <el-table-column
            label="终端名称"
            width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.terminal_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="进程号"
            width="80">
            <template slot-scope="scope">
              <span>{{ scope.row.process_ID }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="CPU占用(%)"
            width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.CPU_percent }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="内存占用(%)"
            width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.memory_percent }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="启动时间"
            width="160">
            <template slot-scope="scope">
              <span>{{ scope.row.start_time }}</span>
            </template>
          </el-table-column>

        </el-table>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Terminal',
  data() {
    return {
      formInline: {
        appName: ''
      },
      tableData: [{
        id: '001',
        app_name: '小盒子A',
        terminal_num: '79'
      }, {
        id: '002',
        app_name: '小盒子B',
        terminal_num: '79'
      }, {
        id: '003',
        app_name: '小盒子C',
        terminal_num: '79'
      }, {
        id: '004',
        app_name: '小盒子D',
        terminal_num: '79'
      }],
      deployment_tableData: [{
        terminal_ID: '001',
        terminal_name: '小盒子A',
        process_ID: '124',
        CPU_percent: '80%',
        memory_percent: '50',
        start_time: '2018-04-12 13:43:12'
      }, {
        terminal_ID: '002',
        terminal_name: '小盒子A',
        process_ID: '124',
        CPU_percent: '80%',
        memory_percent: '50',
        start_time: '2018-04-12 13:43:12'
      }, {
        terminal_ID: '003',
        terminal_name: '小盒子A',
        process_ID: '124',
        CPU_percent: '80%',
        memory_percent: '50',
        start_time: '2018-04-12 13:43:12'
      }, {
        terminal_ID: '004',
        terminal_name: '小盒子A',
        process_ID: '124',
        CPU_percent: '80%',
        memory_percent: '50',
        start_time: '2018-04-12 13:43:12'
      }],
      dialogFormVisible: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleDetail(index, row) {
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

