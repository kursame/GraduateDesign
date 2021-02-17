<template>
    <el-container>
        <el-header></el-header>
        <el-main>
            <el-input
                type="textarea"
                placeholder="MD source"
                v-model="md_src"
            ></el-input>
        </el-main>
    </el-container>
</template>
<script>
export default {
    props: ['src'],
    data() {
        return {
            md_src: ""
        }
    },
    methods: {
    }
}
</script>
<style scoped>
html, body
{
    height : 100%;
}
.el-container
{
    height : 100%;
}
.el-input
{
    height : 100%;
}
.el-main
{
    height : 100%;
    background-color: #E9EEF3;
}
</style>