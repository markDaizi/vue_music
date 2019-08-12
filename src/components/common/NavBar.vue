<template>
    <mt-header :title="title" class="nav">
        <div @click='goback' slot="left">
            <mt-button icon="back">返回</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
    export default {
        name: "NavBar",
        props :['title'],
        data (){
            return {

            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: aqua;
    }
</style>
