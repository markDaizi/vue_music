<template>
    <div class="home">
        <mt-swipe :auto="10000" style="height: 150px;"  :show-indicators="false">
            <mt-swipe-item v-for="(item ,index) of dataList" :key="index">
                <img :src="item.picUrl" class="swipe-img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mod_twocol_list mod_twocol_list_normal">
            <h2 class="list_title">电台</h2>

            <ul class="list_container">
                <li v-for="(item ,index) of radioList" :key="index">
                    <router-link href="javascript:;" class="list_main" :to="{ name: 'SongDesc', params: { Id: item.radioid }}">
                        <div class="list_media">
                            <img class="video_list__media_img"
                                 :src="item.picUrl"
                                 alt="item.Ftitle" :id="item.radioid">
                            <span class="icon icon_play"></span>
                        </div>
                        <div class="list_info"><h3 class="list_tit tit_two_row">{{item.Ftitle}}</h3></div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="mod_twocol_list mod_twocol_list_special">
            <h2 class="list_title">热门歌单</h2>
            <ul class="list_container">
                <li v-for="(item ,index) of songList" :key="index">
                    <router-link class="list_main" href="javascript:;" :to="{ name: 'SongDesc', params: { Id: item.id }}">
                        <div class="list_media">
                            <img :src="item.picUrl">
                            <span class="listen_count">
                            <i class="icon icon_listen"></i>1024.7万</span>
                            <span class="icon icon_play"></span></div>
                        <div class="list_info">
                            <h3 class="list_tit">{{item.songListDesc}}</h3>
                            <p class="list_text">{{item.songListAuthor}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        data() {
            return {
                dataList: [],
                radioList: [],
                songList: []
            }
        },

        mounted() {
            this.$axios.get('/img.json')
                .then(res => {
                    this.dataList = res.data.data.slider;
                    this.radioList = res.data.data.radioList;
                    this.songList = res.data.data.songList;
                })
                .catch(err => console.log(err))
        }
    }
</script>
<style scoped lang="scss">
    .home {
        margin-bottom: 14px;
        z-index: 666;
        .swipe-img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }

    .mod_twocol_list_normal {
        margin-bottom: 7px;
        margin-top: 10px;
    }

    .mod_twocol_list {
        margin-left: 10px;
        margin-right: 10px;
        .list_title {
            font-size: 16px;
            color: #000;
            margin-bottom: 11px;
            font-weight: 400;
        }

        .list_container {
            overflow: hidden;
            margin-right: -8px;

            li {
                float: left;
                width: 50%;
                -webkit-box-sizing: border-box;
                padding-right: 8px;
                margin-bottom: 10px;
                overflow: hidden;
                .list_text,.list_tit {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 400;
                    font-size: 12px;
                }
            }

            .list_main {
                display: block;
                background: #fff;

                .list_media {
                    position: relative;
                    margin-bottom: 5px;
                    z-index: 1;
                    img {
                        top: 0;
                        left: 0;
                        display: block;
                        width: 100%;
                        z-index: 1;
                    }
                    .icon_play,.listen_count {
                        position: absolute;
                        display: block;
                        z-index: 10;
                    }
                   .icon_listen,.icon_play {
                        background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=2592000&v=bf901360b97d78b972786e4e8ece5218);
                        background-repeat: no-repeat;
                        background-size: 24px 60px;
                    }
                    .icon_play {
                        height: 24px;
                        bottom: 5px;
                        right: 5px;
                        width: 24px;
                        background-position: 0 0;
                    }
                    .listen_count {
                        left: 5px;
                        bottom: 7px;
                        display: block;
                        line-height: 12px;
                        color: #fff;
                        .icon_listen {
                            display: block;
                            float: left;
                            width: 10px;
                            height: 10px;
                            background-position: 0 -50px;
                            margin-right: 5px;
                        }
                    }
                }
                .mod_twocol_list li .list_media::before {
                    content: "";
                    display: block;
                    padding-top: 100%;
                }
                .mod_twocol_list_special li .list_media::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 42px;
                    z-index: 2;
                    background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/shadow_rp.png?max_age=2592000&v=1421e030144559ad213fe587f5bf3e52);
                    background-size: 1px 42px;
                    background-repeat: repeat-x;
                }
                .list_info {
                    padding: 0 7px 5px;
                    color: #000;
                }

                .list_tit {
                    font-size: 14px;
                }
            }
            .list_title {
                font-size: 16px;
                color: #000;
                margin-bottom: 11px;
                font-weight: 400;
            }
        }
    }
</style>
