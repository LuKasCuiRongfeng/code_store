<template>
    <div>
        <div class="carousel-container">
            <el-carousel :interval="2000" type="card"
            height="220px" indicator-position="none">
            <el-carousel-item>
                <img style="width:440px;height:220px"
                 src="../assets/image/index/1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width:440px;height:220px"
                 src="../assets/image/index/2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width:440px;height:220px"
                 src="../assets/image/index/3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width:440px;height:220px"
                 src="../assets/image/index/4.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img style="width:440px;height:220px"
                 src="../assets/image/index/m1.gif" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content-box">
            <el-row class="title-bar" :gutter="100">
                <el-col :span="16">
                    <div>
                        <router-link to="/donghua">动画</router-link>
                        <router-link style="float:right"
                        to="/donghua">
                            <i class="el-icon-refresh"></i>
                            更多>>>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span>排行</span>
                    </div>
                </el-col>
            </el-row>
            <el-row class="content-bar" :gutter="100">
                <el-col :span="16" class="content-bar-left">
                    <div>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;" @click="open">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/8.jpg" alt="">
                                            <p class="desc-text">观看三国演义片尾曲《梦在燃烧》,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                        
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;" @click="open2">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/9.jpg" alt="">
                                            <p class="desc-text">收看天行九歌焰灵姬,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i 
                                            class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/5.jpg" alt="">
                                            <p class="desc-text">欢饮来到刺激的世界,在这里，
                                                你会享受当一个死宅的快乐！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="content-bar-right">
                    <div>
                        <ul>
                            <li v-for="(item,i) of donghuaRank"
                             :key="i">
                                <a href="javascript:;">
                                    <el-badge is-dot class="item">
                                        <el-button class="share-button"
                                        :type="i<3?'primary':'info'">
                                            {{i+1}}
                                        </el-button>
                                        <span>{{item}}</span>
                                    </el-badge>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box">
            <el-row class="title-bar" :gutter="100">
                <el-col :span="16">
                    <div>
                        <router-link to="/fanju">番剧</router-link>
                        <router-link style="float:right"
                        to="/fanju"><i class="el-icon-refresh"></i>
                            更多>>></router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span>排行</span>
                    </div>
                </el-col>
            </el-row>
            <el-row class="content-bar" :gutter="100">
                <el-col :span="16" class="content-bar-left">
                    <div>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/6.jpg" alt="">
                                            <p class="desc-text">这里是番剧，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="content-bar-right">
                    <div>
                        <ul>
                            <li v-for="(item,i) of donghuaRank"
                             :key="i">
                                <a href="javascript:;">
                                    <el-badge is-dot class="item">
                                        <el-button class="share-button"
                                        :type="i<3?'primary':'info'">
                                            {{i+1}}
                                        </el-button>
                                        <span>{{item}}</span>
                                    </el-badge>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box">
            <el-row class="title-bar" :gutter="100">
                <el-col :span="16">
                    <div>
                        <router-link to="/guochan">国产</router-link>
                        <router-link style="float:right"
                        to="/guochan"><i class="el-icon-refresh"></i>
                            更多>>></router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span>排行</span>
                    </div>
                </el-col>
            </el-row>
            <el-row class="content-bar" :gutter="100">
                <el-col :span="16" class="content-bar-left">
                    <div>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/7.jpg" alt="">
                                            <p class="desc-text">这里是国创，在这里你可以看到很多
                                                你想看到的动漫动画！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="content-bar-right">
                    <div>
                        <ul>
                            <li v-for="(item,i) of donghuaRank"
                             :key="i">
                                <a href="javascript:;">
                                    <el-badge is-dot class="item">
                                        <el-button class="share-button"
                                        :type="i<3?'primary':'info'">
                                            {{i+1}}
                                        </el-button>
                                        <span>{{item}}</span>
                                    </el-badge>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box">
            <el-row class="title-bar" :gutter="100">
                <el-col :span="16">
                    <div>
                        <router-link to="/yinyue">音乐</router-link>
                        <router-link style="float:right"
                        to="/yinyue"><i class="el-icon-refresh"></i>
                            更多>>></router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span>排行</span>
                    </div>
                </el-col>
            </el-row>
            <el-row class="content-bar" :gutter="100">
                <el-col :span="16" class="content-bar-left">
                    <div>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m4.jpg" alt="">
                                            <p class="desc-text">这里是音乐区，在这里你可以看到很多
                                                你听得音乐，享受听觉盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="content-bar-right">
                    <div>
                        <ul>
                            <li v-for="(item,i) of donghuaRank"
                             :key="i">
                                <a href="javascript:;">
                                    <el-badge is-dot class="item">
                                        <el-button class="share-button"
                                        :type="i<3?'primary':'info'">
                                            {{i+1}}
                                        </el-button>
                                        <span>{{item}}</span>
                                    </el-badge>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box">
            <el-row class="title-bar" :gutter="100">
                <el-col :span="16">
                    <div>
                        <router-link to="/youxi">游戏</router-link>
                        <router-link style="float:right"
                        to="/youxi"><i class="el-icon-refresh"></i>
                            更多>>></router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div>
                        <span>排行</span>
                    </div>
                </el-col>
            </el-row>
            <el-row class="content-bar" :gutter="100">
                <el-col :span="16" class="content-bar-left">
                    <div>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <el-row :gutter="10">
                            <div>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div style="overflow:hidden">
                                        <a href="javascript:;">
                                            <img width="147.33" height="105"
                                            src="../assets/image/index/m5.jpg" alt="">
                                            <p class="desc-text">这里是游戏区，在这里你可以很多有趣
                                                的游戏，享受手指盛宴！！！</p>
                                            <i class="el-icon-video-play i">9999万</i>
                                            <i class="el-icon-chat-line-square i">100万</i>
                                        </a>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="content-bar-right">
                    <div>
                        <ul>
                            <li v-for="(item,i) of donghuaRank"
                             :key="i">
                                <a href="javascript:;">
                                    <el-badge is-dot class="item">
                                        <el-button class="share-button"
                                        :type="i<3?'primary':'info'">
                                            {{i+1}}
                                        </el-button>
                                        <span>{{item}}</span>
                                    </el-badge>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
const baseImageUrl="/assets/image/index/"
export default {
    data(){
        return{
            donghuaRank:[
                "dasgdsagasgasgasdg",
                "dfasgagagaghfjyehth",
                "dfagrehrtjfsghghfgjw",
                "daghtrehgbsgsgfshrttu",
                "dahttyhmkuykuykyut",
                "dgerytrhtynyjjurkku",
                "dfasdgfdhgfjjthrthgf"
            ]
        }
    },
    methods:{
        open(){
            this.$alert(
                `<video controls style="width:500px">
                <source src=${require("../assets/video/sanguoyanyi.mp4")}>
                </video>`,
                {dangerouslyUseHTMLString:true,
                center:true,
                confirmButtonText:"关闭",
                showClose:false,
                customClass:"message-box",
                beforeClose:(action,instance,done)=>{
                    if(action=="confirm"){
                        instance.message=""
                    }
                    done();
                }}
            )
        },
        open2(){
            this.$alert(
                `<video controls style="width:500px">
                <source src=${require("../assets/video/tianxingjiuge.mp4")}>
                </video>`,
                {dangerouslyUseHTMLString:true,
                center:true,
                confirmButtonText:"关闭",
                showClose:false,
                customClass:"message-box",
                beforeClose:(action,instance,done)=>{
                    if(action=="confirm"){
                        instance.message=""
                    }
                    done();
                }}
            )
        }
    }
}
</script>
<style>
@import '../assets/css/index++.css';
.message-box{
    width: 500px !important;
    padding: 0 !important;
}
.el-message-box__content{
    padding:0 !important;
}
</style>