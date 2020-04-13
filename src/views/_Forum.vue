<template>
    <div>
        <el-button
        @click="tiaozhuan">tiaozhuan</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"crf"
        }
    },
    created(){
        console.log("created"+this.name,new Date());
        this.name="yuanxue"
    },
    mounted(){
        console.log("mounted"+this.name+new Date());
    },
    methods:{
        tiaozhuan(){
            this.$router.push("/forum");
        }
    },
    beforeDestroy(){
        console.log("beforeDestory"+this.name,new Date());
    },
    destroyed(){
        console.log("destroyed"+this.name,new Date())
    }
}
</script>