<template>
  <div class="app-container">
    <el-row :gutter="40" style="margin-bottom:20px">
      <el-col :span="6">
        <div class="grid-content-4">
          <div class="box-top">
            <p class="title">待处理任务</p>
            <div class="num">4个</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content-4">
          <div class="box-top">
            <p class="title">平均处理时间</p>
            <div class="num">5分钟</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content-4">
          <div class="box-top">
            <p class="title">空闲终端台数</p>
            <div class="num">24台</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content-4">
          <div class="box-top">
            <p class="title">终端台数</p>
            <div class="num">566台</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:20px">
      <el-col :span="24"><div class="grid-content-24"/></el-col>
    </el-row>
    <el-row style="margin-bottom:20px">
      <el-col :span="12">
        <div class="grid-content"/>
      </el-col>
      <el-col :span="12">
        <div class="grid-content"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
<style>
.app-container{
  padding: 20px;
}
.grid-content-4{
  padding: 50%;
  position: relative
}

.box-top{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee
}

.box-top .title{
  line-height: 32px;
  font-size: 18px;
  color:#333;
  text-align: center
}

.box-top .num{
  position: absolute;
  top: 50%;
  bottom: 0;
  margin: -32px 0 0 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  font-weight: 600;
  text-align: center
}

.grid-content-24{
  padding-bottom: 35%;
  background-color: #ccc
}
</style>

