<template>
  <div class="main">
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          mode="vertical"
          class="menu"
          router="true"
        >
        <el-menu-item index="1" :route="{name: 'Search'}">
          <i class="el-icon-files"></i>
          <span slot="title">问题查询</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{name: 'Exam'}">
          <i class="el-icon-s-grid"></i>
          <span slot="title">试卷编辑</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-reading"></i>
          <span slot="title">题目管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-more"></i>
          <span slot="title">树查询</span>
        </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
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
.main
{
  margin : 0px;
  height : 100%;
}
.el-container
{
  height : 100%;
}
.el-aside
{
  width : 100px;
  height : 100%;
}
.menu
{
  width : 200px;
  height : 100%;
}
.el-main
{
  padding : 0px;
}
</style>