<template>
  <div id="app">
      <mt-header title="我的第一个Vue项目"></mt-header>
    <router-view/>
      <div class="block"></div>
    <mt-tabbar fixed v-model="selected" class="footer">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/images/1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="SongList">
        <img slot="icon" src="../static/images/1.png">
        歌单
      </mt-tab-item>
      <mt-tab-item id="Find">
        <img slot="icon" src="../static/images/1.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon" src="../static/images/1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'Home',
        active: ''
      }
    },
      watch: {
          selected:function (newV) {
              this.$router.push({
                  name:newV
              })
          }
      }
  }
</script>
<style lang="scss">
.header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  box-shadow: 0 5px 5px rgba(0,0,0,.02);
  background: #fff;
  height: 80px;
  padding: 0 10px;
}
.block{
    height: 55px;
    width: 100%;
}
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: center;
  }
</style>
