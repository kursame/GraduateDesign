<template>
  <div>
    <el-card class="problem_box">
        <div slot="header" class="title">
          <span>{{problem.type}}</span>
          <el-button style="float: right; padding : 3px 0" type="text" @click="check_prob()">查看</el-button>
        </div>
        <div>
          <p class="brief">{{problem.brief}}</p>
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: ['problem']
  data() {
    return {
      problem_obj: {}
    }
  },
  mounted() {
    this.problem_obj = this.problem;
  }
}
</script>
<style>
  
</style>