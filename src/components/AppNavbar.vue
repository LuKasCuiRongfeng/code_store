<template>
    <div class="app-nav-tabbar">
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                text-color="#000"
                active-text-color="#42b983">
                <el-submenu v-for="(tabbar, i) of tabbars" :key="i" :index="i+1+''">
                    <template slot="title">
                        <router-link :to="tabbar.src">{{tabbar.title}}</router-link>
                    </template>
                    <el-menu-item v-for="(item, ind) of tabbar.items" :key="ind"
                        :index="i+1+'-'+ind+1">
                        {{item}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
</template>
<script>
export default {
    data(){
        return{
            tabbars: [
                {"title": "首页", "items": ["首页"], "src": "/"},
                {"title": "动画", "items": ["MAD-AMV", "MMD-3D", "短片.手书.配音"], "src": "/donghua"},
                {"title": "番剧", "items": ["连载动画", "完结动画", "咨询", "官方延伸", "新番时间表", "番剧索引"], "src": "/fanju"},
                {"title": "国产", "items": ["国产动画", "国产原创相关", "布袋戏", "动态漫.广播剧", "咨询", "新番时间表", "国产动画索引"], "src": "/guochan"},
                {"title": "音乐", "items": ["原创音乐", "翻唱", "VOCALOID.UTAU", "电音", "演奏", "MV", "音乐现场", "音乐综合", "音频"], "src": "/yinyue"},
                {"title": "游戏", "items": ["单机游戏", "电子竞技", "手机游戏", "网络游戏", "桌游棋牌", "GMV", "音游", "Mugen", "游戏赛事"], "src": "/youxi"},
            ],
            activeIndex:"",
            activeIndex2:""
        }
    },
    methods:{
        handleSelect(key,keyPath){
            console.log(key,keyPath);
        }
    }
}
</script>
<style scoped>

</style>