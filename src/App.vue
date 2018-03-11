<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="navbar">
      <router-link to="/search">
        <div class="nav" :class="{'ischoose':ischoose==1}" @click="choose(1)">
          <!-- <div class="nav-icon"><img class="nav-icon" src="static/search.png"></div> -->
          <div class="nav-body">
            <span><img class="nav-icon" src="/static/search.png"></span>发现音乐
          </div>
        </div>
      </router-link>
      <!-- <router-link to="/likebill"> -->
        <div class="nav" :class="{'ischoose':ischoose==2}" @click="choose(2)">
          <!-- <div class="nav-icon"><img class="nav-icon" src="static/like.png"></div> -->
          <div class="nav-body">
            <span><img class="nav-icon" src="/static/like.png"></span>我喜欢的音乐
          </div>
        </div>
      <!-- </router-link> -->
      <!-- <router-link to="/bill"> -->
        <div class="nav" :class="{'ischoose':ischoose==3}" @click="choose(3)">
          <!-- <div class="nav-icon"><img class="nav-icon" src="static/playlist.png"></div> -->
          <div class="nav-body">
            <span><img class="nav-icon" src="/static/playlist.png"></span>我创建的歌单
          </div>
        </div>
      <!-- </router-link> -->
    </div>
    <router-view/>
    <audio id="music-play"></audio>
    <div id="controller"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      ischoose:0
    }
  },
  methods:{
    choose(val){
      this.ischoose = val;
    }
  }
}
</script>

<style>
*{
  margin:0 0;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 微软雅黑;
}
body{
  background-color: rgb(249,249,249);
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
#navbar{
  width: 180px;
  height: 546px;
  background-color: rgb(244,245,245);
  border: 2px solid rgb(211,211,211);
}
.nav{
  height: 32px;
  margin: 0 0;
  padding-top: 8px;
  padding-bottom: 10px;
}
.nav-body{
  height: 32px;
  font-size: 20px;
  line-height: 32px;
}
.nav-icon{
  width: 18px;
  height: 18px;
  margin: auto 8px;
}
a{
  color: #000;
  text-decoration: none;
}
a:hover .nav{
  background-color: rgb(211,211,211);
}
.ischoose{
  background-color: rgb(200,200,200);
}
#controller{
  width: 100vw;
  height: 65px;
  border: 2px solid rgb(211,211,211);
  position: fixed;
  bottom: 0px;
  background-color: rgb(249,249,249);
}
</style>
