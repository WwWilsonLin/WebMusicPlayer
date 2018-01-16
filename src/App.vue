<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="navbar">
      <div class="nav">
        <div class="nav-icon"></div>
        <div class="nav-body">搜索</div>
      </div>
      <div class="nav">
        <div class="nav-icon"></div>
        <div class="nav-body">我喜欢的音乐</div>
      </div>
      <div class="nav">
        <div class="nav-icon"></div>
        <div class="nav-body">我创建的歌单</div>
      </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
