<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="终端名称">
        <el-input v-model="formInline.terminalName" placeholder="终端名称"/>
      </el-form-item>
      <el-form-item label="状态">

        <el-select v-model="formInline.status_value" placeholder="状态">
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
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="终端名称"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.terminal_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="外网IP"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.IP }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="本地IP"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.local_IP }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Java版本"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.java_version }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
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
  </div>
</template>

<script>

export default {
  name: 'Terminal',
  data() {
    return {
      formInline: {
        terminalName: '',
        value: '',
        status_value: ''
      },
      options: [{
        value: '-1',
        label: '全部'
      }, {
        value: '1',
        label: '是'
      }, {
        value: '0',
        label: '否'
      }],
      tableData: [{
        id: '001',
        terminal_name: '小盒子A',
        IP: 'http://49.4.84.79',
        local_IP: '192.168.1.3',
        java_version: 'Vsion12.3',
        status: '0'
      }, {
        id: '002',
        terminal_name: '小盒子B',
        IP: 'http://49.4.84.79',
        local_IP: '192.168.1.3',
        java_version: 'Vsion12.3',
        status: '0'
      }, {
        id: '003',
        terminal_name: '小盒子C',
        IP: 'http://49.4.84.79',
        local_IP: '192.168.1.3',
        java_version: 'Vsion12.3',
        status: '0'
      }, {
        id: '004',
        terminal_name: '小盒子D',
        IP: 'http://49.4.84.79',
        local_IP: '192.168.1.3',
        java_version: 'Vsion12.3',
        status: '0'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleDetail(index, row) {
      this.$router.push({ path: '/monitoring/terminal_detail' })
      console.log(index, row)
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding: 20px;
  }
</style>

