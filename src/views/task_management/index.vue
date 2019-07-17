<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="终端名称">
        <el-input v-model="formInline.terminalName" placeholder="终端名称"/>
      </el-form-item>
      <el-form-item label="应用名称">
        <el-input v-model="formInline.appName" placeholder="应用名称"/>
      </el-form-item>
      <el-form-item label="任务状态">
        <el-select v-model="formInline.status_value" placeholder="任务状态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addTask">添加任务</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="task_tableData"
      style="width: 100%">
      <el-table-column
        label="任务编号"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.task_ID }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="任务类型"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.task_type }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="应用名称"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.app_name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="终端名称"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.terminal_name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="发布时间"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.publish_time }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="任务状态"
        width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.task_status }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)">详细</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="详情">
      <el-form :model="detail_form" size="mini">
        <el-row>
          <el-col :span="12">
            <el-form-item label="任务类型">
              <el-input v-model="detail_form.task_type"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发布时间">
              <el-input v-model="detail_form.publish_time"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="应用名称">
              <el-input v-model="detail_form.app_name"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开始时间">
              <el-input v-model="detail_form.start_time"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="终端名称">
              <el-input v-model="detail_form.terminal_name"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束时间">
              <el-input v-model="detail_form.end_time"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="任务状态">
          <el-input v-model="detail_form.task_status"/>
        </el-form-item>
        <el-form-item label="执行结果">
          <img :src="detail_form.execution_result" >
        </el-form-item>
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
        terminalName: '',
        appName: '',
        terminal_name: ''
      },
      detail_form: {
        task_type: '安装',
        publish_time: '2018-08-12 12:01:19',
        app_name: '包1.0',
        start_time: '2018-08-12 12:01:19',
        terminal_name: '小盒子1',
        end_time: '2018-07-19 8:05:21',
        task_status: 1,
        execution_result: ''
      },
      dialogFormVisible: false,
      options: [{
        value: '-1',
        label: '未开始'
      }, {
        value: '1',
        label: '已完成'
      }, {
        value: '0',
        label: '失败'
      }],
      task_tableData: [{
        task_ID: '001',
        task_type: '小盒子A',
        app_name: '',
        publish_time: '2018-08-12 12:01:19',
        task_status: 1
      }, {
        task_ID: '002',
        task_type: '小盒子A',
        app_name: '',
        publish_time: '2018-08-12 12:01:19',
        task_status: 2
      }, {
        task_ID: '003',
        task_type: '小盒子A',
        app_name: '',
        publish_time: '2018-08-12 12:01:19',
        task_status: 3
      }, {
        task_ID: '004',
        task_type: '小盒子A',
        app_name: '',
        publish_time: '2018-08-12 12:01:19',
        task_status: 4
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleDetail(index, row) {
      console.log(index, row)
      this.dialogFormVisible = true
    },
    addTask() {
      this.$router.push({ path: '/app4distribution/add_task' })
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding: 20px;
  }
</style>

