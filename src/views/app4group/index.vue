<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addGroup">新建分组</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="app_tableData"
      style="width: 100%">
      <el-table-column
        label="应用分组"
        width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.app_group }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="文件下载根URL"
        width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.down_url }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="文件下载根URL"
        width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.install_path }}</span>
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
        <el-form-item label="应用分组">
          <el-input v-model="detail_form.app_group"/>
        </el-form-item>

        <el-form-item label="文件下载根URL">
          <el-input v-model="detail_form.down_url"/>
        </el-form-item>

        <el-form-item label="安装路径">
          <el-input v-model="detail_form.install_path"/>
        </el-form-item>

        <el-form-item label="安装命令">
          <el-input v-model="detail_form.install_CMD"/>
        </el-form-item>

        <el-form-item label="卸载命令">
          <el-input v-model="detail_form.uninstall_CMD"/>
        </el-form-item>

        <el-form-item label="安装命令">
          <el-input v-model="detail_form.start_CMD"/>
        </el-form-item>

        <el-form-item label="安装命令">
          <el-input v-model="detail_form.stop_CMD"/>
        </el-form-item>

        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        install_path: 'c:/programe/install',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '002',
        install_path: 'c:/programe/install',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '003',
        install_path: 'c:/programe/install',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }, {
        app_ID: '004',
        install_path: 'c:/programe/install',
        app_group: '组1',
        down_url: 'http://www.baidu.com'
      }],
      detail_form: {
        app_ID: '001',
        install_path: 'c:/programe/install',
        app_group: '组1',
        down_url: 'http://www.baidu.com',
        install_CMD: 'npm install',
        uninstall_CMD: 'npm uninstall',
        start_CMD: 'npm run dev',
        stop_CMD: 'ctrl+c'
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

