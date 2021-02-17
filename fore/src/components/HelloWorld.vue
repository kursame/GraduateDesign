<template>
  <div class="exam">
    <el-menu
      mode="horizontal"
      :default-active="3"
    >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>文件</span>
      </template>
        <el-menu-item><span>保存</span></el-menu-item>
        <el-menu-item><span>导出</span></el-menu-item>
    </el-submenu>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>编辑</span>
      </template>
        <el-menu-item><span>保存</span></el-menu-item>
        <el-menu-item><span>导出</span></el-menu-item>
    </el-submenu>
    </el-menu>
    <el-container>
      <el-header>Empty Title</el-header>
      <el-main>
      <el-card class="problem_box" v-for="(problem , index) in problems">
        <div slot="header" class="title">
          <el-badge :value="index + 1"><div><span>{{problem.type}}</span></div></el-badge>
          <el-button style="float: right; padding : 3px 0" type="text">查看</el-button>
        </div>
        <div>
          <p class="brief">{{problem.brief}}</p>
        </div>
      </el-card>
      <el-card class="problem_box">
        <div>
          <i class="el-icon-plus"></i>
        </div>
      </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      problems: [{
        id: "1",
        type: "证明题",
        brief: "通过构造证明等式"
      },
      {
        id: "2",
        type: "证明题",
        brief: "通过两次运用零点定理找到中值定理条件"
      }]
    }
  }
}
</script>
<style scoped>
html, body
{
  height : 100%;
  padding : 0px;
}
.bdc
{
  margin-top : 50px;
}
.problem_box
{
  width : 250px;
  display : inline-block;
  margin : 15px;
}
.title
{
  text-align : left;
  color : #67C23A;
}
.brief
{
  padding : 5px 5px;
  font-size : 12px;
  float : left;
  color : #909399;
}
</style>