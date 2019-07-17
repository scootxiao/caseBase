<template>
  <div class="app-container">
    <div class="mode-warper">
      <div class="mode-hd">小盒子状况</div>
      <el-row>
        <el-col :span="6"><div class="grid-content">状态：在线</div></el-col>
        <el-col :span="6"><div class="grid-content">更新时间：2018-01-12 12:12:31</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content">本地IP：192.168.2.202</div></el-col>
        <el-col :span="6"><div class="grid-content">外网IP：192.168.2.202</div></el-col>
        <el-col :span="6"><div class="grid-content">Java版本：1.8.0_262</div></el-col>
      </el-row>
    </div>
    <div class="mode-warper">
      <div class="mode-hd">应用运行状态列表</div>
      <el-table
        :data="status_tableData"
        style="width: 100%">
        <el-table-column
          label="程序名称"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.program_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="进程号"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.process_ID }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="CPU占用(%)"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.CPU_percent }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="内存占用(%)"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.memory_percent }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="启动时间"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.start_time }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mode-warper">
      <div class="mode-hd">终端资源情况</div>
      <div class="echarts-warper">
        <div class="echarts"/>
      </div>
      <el-table
        :data="terminal_tableData"
        style="width: 100%">
        <el-table-column
          label="CPU占用(%)"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.CPU_percent }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="内存占用(%)"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.memory_percent }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="磁盘占用(%)"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.disk_percent }}</span>
          </template>
        </el-table-column>

        <el-table-column
          label="更新时间"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.update_time }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TerminalDetail',
  data() {
    return {
      status_tableData: [{
        program_ID: '001',
        program_name: '程序1',
        process_ID: '1231',
        CPU_percent: '80',
        memory_percent: '89',
        start_time: '2018-04-23 12:32:12'
      }, {
        program_ID: '002',
        program_name: '程序2',
        process_ID: '1231',
        CPU_percent: '80',
        memory_percent: '89',
        start_time: '2018-04-23 12:32:12'
      }, {
        program_ID: '003',
        program_name: '程序3',
        process_ID: '1231',
        CPU_percent: '80',
        memory_percent: '89',
        start_time: '2018-04-23 12:32:12'
      }, {
        program_ID: '004',
        program_name: '程序4',
        process_ID: '1231',
        CPU_percent: '80',
        memory_percent: '89',
        start_time: '2018-04-23 12:32:12'
      }],
      terminal_tableData: [{
        CPU_percent: '80',
        memory_percent: '89',
        disk_percent: '19',
        update_time: '2018-04-23 12:32:12'
      }, {
        CPU_percent: '80',
        memory_percent: '89',
        disk_percent: '19',
        update_time: '2018-04-23 12:32:12'
      }, {
        CPU_percent: '80',
        memory_percent: '89',
        disk_percent: '19',
        update_time: '2018-04-23 12:32:12'
      }]
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding: 20px;
  }
  .mode-warper{
    margin-bottom: 15px;
  }

  .mode-hd{
    margin-bottom: 10px;
    line-height: 36px;
  }

  .grid-content{
    line-height: 32px;
    font-size: 14px;
    color:#595959;
  }

  .echarts-warper{
    margin-bottom: 15px;
    padding-bottom: 35%;
    position: relative;
  }

  .echarts{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ccc
  }
</style>

