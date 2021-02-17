<template>
  <div class="search">
    <div class="bdc">
    <el-divider></el-divider>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="tag in tags">{{tag}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    </div>
    <div class="condition">
      <el-tree
      :data="tree_data"
      show-checkbox
      :default-expanded-keys="[1 , 3 , 5 , 7]"
      ></el-tree>
    <el-divider></el-divider>
    </div>
    <div class="result">
      <el-card class="problem_box" v-for="problem in problems">
        <div slot="header" class="title">
          <span>{{problem.type}}</span>
          <el-button style="float: right; padding : 3px 0" type="text" @click="check_prob()">查看</el-button>
        </div>
        <div>
          <p class="brief">{{problem.brief}}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: ["单变量分析", "微分", "微分中值定理", "Largange中值定理"],
      problems: [{
        id: "1",
        type: "证明题",
        brief: "通过构造证明等式"
      },
      {
        id: "2",
        type: "证明题",
        brief: "通过两次运用零点定理找到中值定理条件"
      }],
      tree_data: [
        {
          id: 1,
          label: "单变量分析",
          children: [
            {
              id: 3,
              label: "微分",
              children: [
                {
                  id: 5,
                  label: "微分中值定理",
                  children: [
                    {
                    id: 7,
                    label: "Largange中值定理"
                    }
                  ]
                }
              ]
            },
            {
            id: 4,
            label: "积分"
            }
          ]
        },
        {
          id: 2,
          label: "多变量分析"
        }
      ]
    }
  },
  methods: {
    check_prob: function(){
      this.$router.push({name: "Problem" , params: {problem_id : "123"}});
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
  width : 360px;
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
.search
{
  margin : 0px;
  padding : 0px;
}
</style>