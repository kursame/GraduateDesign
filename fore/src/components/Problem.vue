<template>
  <div class="grid">
    <div class="title"><span class="prob_title">{{problem_title}}</span></div>
    <div class="content" v-html="rendered_problem"></div>
    <div class="tag">
      <el-tag v-for="tag in tags">{{tag}}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: ['problem_id'],
  data () {
    return {
      problem_title: "empty title",
      rendered_problem: "",
      tags: [],
      err: ""
    }
  },
  methods: {
      
  },
  mounted() {
    this.problem_title = this.$route.params.problem_id
      this.problem_content = "计算函数项级数的和函数，其中$u_i = \\frac{1}{i} x^i$ \n $$f(x) = \\sum_{i = 1} u_i$$";
      
      this.tags = ["函数项级数" , "一致收敛"]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid
{
  margin : 0px;
  height : 100%;
  display : grid;
  grid-template-rows : 50px 70% 10%;
  grid-template-columns : repeat(1 , 90%);
  grid-row-gap : 10px;
  background-color : #F2F6FC;
  place-content : center;
}
.title
{
  border : 1.5px solid #67C23A;
  border-radius : 3px;
  box-shadow : 1px 1px 3px #606266 inset;
  background-color : #E4E7ED;
  grid-row-start : 1;
  grid-row-end : 2;
}
.content
{
  border-radius : 0px;
  box-shadow : 1px 1px 3px #606266 inset;
  background-color : #E4E7ED;
}
.tag
{
  padding : 10px;
  border : 1.5px solid #409EFFc;
  border-radius : 3px;
  box-shadow : 1px 1px 3px #606266 inset;
  background-color : #E4E7ED;
  text-align : left;
}
.prob_title
{
  font-size : 35px;
  color : #606266;
}
</style>