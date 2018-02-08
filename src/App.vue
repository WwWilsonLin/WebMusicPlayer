<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="navbar">
      <!-- <router-link to="/find"> -->
        <div class="nav">
          <div class="nav-icon"></div>
          <div class="nav-body">搜索</div>
        </div>
      <!-- </router-link> -->
      <!-- <router-link to="/likebill"> -->
        <div class="nav">
          <div class="nav-icon"></div>
          <div class="nav-body">我喜欢的音乐</div>
        </div>
      <!-- </router-link> -->
      <!-- <router-link to="/bill"> -->
        <div class="nav">
          <div class="nav-icon"></div>
          <div class="nav-body">我创建的歌单</div>
        </div>
      <!-- </router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  height: 90%;
  background-color: rgb(244,245,245);
  border: 2px solid rgb(211,211,211);
}
.nav{
  margin: 20px 8px;
}
a{
  text-decoration: none;
}
.nav-body{
  font-size: 18px; 
}
</style>
