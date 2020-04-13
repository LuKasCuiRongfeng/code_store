<template>
    <div>
        <div class="donghua-carousel-container">
            <el-carousel :interval="2000" type="card" height="177px">
                <el-carousel-item v-for="(item,i) of image"
                :key="i">
                    <el-image
                    :src="require('../'+baseImageUrl+item+imageSuffix)"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--循环-->
        <div class="donghua-divide" v-for="(divide,i) of donghuaTotalData"
        :key="i">
            <el-row class="donghua-title-bar" :gutter="20">
                <el-col :span="18">
                    <div>{{divide.divideTitle}}</div>
                </el-col>
                <el-col :span="6">
                    <div>排行</div>
                </el-col>
            </el-row>
            <el-row class="donghua-content-bar" :gutter="20">
                <el-col :span="18">
                    <div>
                        <el-row :gutter="10" v-for="(row,i) of divide.contentBar"
                        :key="i" class="donghua-content-bar-row">
                            <el-col class="donghua-content-bar-row-col"
                            :span="6" v-for="(item,i) of row"
                            :key="i">
                                <div class="donghua-content-bar-row-item">
                                    <a href="javascript:;">
                                        <el-image :src="item.image" class="donghua-content-bar-row-item-image"
                                        :style="imageStyle"></el-image>
                                        <p class="donghua-content-bar-row-item-desc">{{item.desc}}</p>
                                        <i class="el-icon-video-play i">{{item.play}}</i>
                                        <i class="el-icon-chat-line-square i">{{item.barrage}}</i>
                                    </a>
                                    
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="6" class="donghua-content-bar-rank">
                    <div v-for="(rank,i) of divide.rank"
                    :key="i" class="donghua-content-bar-rank-item">
                        <el-button :style="rankButtonStyle"
                        :type="i<3?'success':'info'">{{i+1}}</el-button>
                        <a href="javascript:;" class="donghua-content-bar-rank-item-desc">
                            <span>{{rank.desc}}</span>
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
const baseImageUrl="../assets/image/index/"
export default {
    data(){
        return{
            baseImageUrl:"assets/image/donghua/",
            image:[1,2,3,4,5],
            imageSuffix:".webp",
            imageStyle:{height:"100px"},
            rankButtonStyle:{padding:"5px"},
            donghuaTotalData:[
                {
                    "divideTitle":"MMD·3D",
                    "contentBar":[
                        [
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ]
                    ],
                    "rank":[
                        {"rankNumber":1,"desc":"【秦时明月】"},
                        {"rankNumber":2,"desc":"【天行九歌】"},
                        {"rankNumber":3,"desc":"【三国演义】"},
                        {"rankNumber":4,"desc":"【超兽武装】"},
                        {"rankNumber":5,"desc":"【未闻花名】"},
                        {"rankNumber":6,"desc":"【君临天下】"},
                        {"rankNumber":7,"desc":"【秦汉英雄转】"},
                        {"rankNumber":8,"desc":"【NBA2K】"},
                        {"rankNumber":9,"desc":"【FIFA2019】"},
                        {"rankNumber":10,"desc":"【焰灵姬】"}
                    ]
                },
                {
                    "divideTitle":"短片·手书·配音",
                    "contentBar":[
                        [
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ]
                    ],
                    "rank":[
                        {"rankNumber":1,"desc":""},
                        {"rankNumber":2,"desc":""},
                        {"rankNumber":3,"desc":""},
                        {"rankNumber":4,"desc":""},
                        {"rankNumber":5,"desc":""},
                        {"rankNumber":6,"desc":""},
                        {"rankNumber":7,"desc":""},
                        {"rankNumber":8,"desc":""},
                        {"rankNumber":9,"desc":""},
                        {"rankNumber":10,"desc":""}
                    ]
                },
                {
                    "divideTitle":"特摄",
                    "contentBar":[
                        [
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/2.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ],
                        [
                            {"image":require("../assets/image/donghua/4.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/5.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/3.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"},
                            {"image":require("../assets/image/donghua/1.webp"),"desc":"当个死宅真舒服,当个死宅真舒服,当个死宅真舒服","play":"9999万","barrage":"100万"}
                        ]
                    ],
                    "rank":[
                        {"rankNumber":1,"desc":""},
                        {"rankNumber":2,"desc":""},
                        {"rankNumber":3,"desc":""},
                        {"rankNumber":4,"desc":""},
                        {"rankNumber":5,"desc":""},
                        {"rankNumber":6,"desc":""},
                        {"rankNumber":7,"desc":""},
                        {"rankNumber":8,"desc":""},
                        {"rankNumber":9,"desc":""},
                        {"rankNumber":10,"desc":""}
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
@import '../assets/css/donghua.css';
</style>