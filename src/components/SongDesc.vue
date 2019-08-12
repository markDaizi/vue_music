<template>
    <div>
        <NavBar :title="title"></NavBar>
        <mt-cell :title="item.name" :value="item.author" v-for="item of songList" :key="item.id"></mt-cell>
    </div>
</template>

<script>
    export default {
        name: "SongDesc",
        created() {
            this.$axios.get('./songList.json')
                .then(res => {
                    this.songList = res.data.songList;
                    console.log(this.songList);
                }).catch(err => console.log(err))
        },
        data() {
            return {
                title: '歌曲详情',
                songList: [],
                active: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
