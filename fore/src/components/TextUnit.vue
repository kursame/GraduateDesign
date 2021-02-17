<template>
    <div
    @keyup.enter="edit()"
    >
        <el-input
            type="textarea"
            placeholder="source code here"
            autosize
            v-model="md_src"
        >
        </el-input>
        <div v-html="rendered_src"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            md_src: "",
            rendered_src: "",
            test_text: 1
        }
    },
    methods: {
        test: function(){
            this.test_text ++;
        },
        interpret: function(){
            this.$axios({
                method: 'post',
                url: '/api/md_render',
                data: {
                    'src': this.md_src
                }
            }).then((res) => {
                this.rendered_src = res['data']['rendered'];
                this.status = false;
            }).catch((err) => {
                console.log(err);
            });
        },
    },
    watch: {
        md_src: function() {
            this.interpret();
        },
    }
}
</script>
<style>
    
</style>