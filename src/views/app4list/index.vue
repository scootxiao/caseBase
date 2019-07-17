<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item label="应用名称">
        <el-input v-model="formInline.appName" placeholder="应用名称"/>
      </el-form-item>
      <el-form-item label="应用分组">
        <el-input v-model="formInline.appGroup" placeholder="应用分组"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addApp">添加应用</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="app_tableData"
      style="width: 100%">
      <el-table-column
        label="应用名称"
        width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.app_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="应用分组"
        width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.app_group }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="文件下载URL"
        width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.down_url }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            @click="handleRemove(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="应用详情">
      <el-form :model="detail_form" size="mini" label-width="120px">
        <el-form-item label="应用名称">
          <el-input v-model="detail_form.app_name"/>
        </el-form-item>

        <el-form-item label="应用分组">
          <el-input v-model="detail_form.app_group"/>
        </el-form-item>

        <el-form-item label="文件下载URL">
          <el-input v-model="detail_form.down_url"/>
        </el-form-item>

        <el-form-item label="文件创建时间">
          <el-input v-model="detail_form.creat_time"/>
        </el-form-item>

        <el-form-item label="文件大小">
          <el-input v-model="detail_form.file_size"/>
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
        appName: '',
        appGroup: ''
      },
      dialogFormVisible: false,
      app_tableData: [{
        app_ID: '001',
        app_name: '小盒子A',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '002',
        app_name: '小盒子A',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '003',
        app_name: '小盒子A',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '004',
        app_name: '小盒子A',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }],
      detail_form: {
        app_ID: '003',
        app_name: '小盒子A',
        app_group: '组1',
        down_url: 'http://www.baidu.com',
        creat_time: '2018-10-21 15:32:23',
        file_size: '14Kb'
      }
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
    addApp() {
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

