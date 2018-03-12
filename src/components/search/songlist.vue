<template>
<div @click="play(songid)">
	<div class="songname">{{songname}}</div>
	<div class="artistname">{{artistname}}</div>
	<hr>
</div>
</template>

<script>
export default{
	props:["songname","artistname","songid"],
	methods:{
		play(songid){
			this.$axios.get(this.SEARCH_HOST,{
				params: {
					"method": "baidu.ting.song.play",
					"songid": songid
				}
			}).then(res=>{
				// console.log(document.getElementById("music-play"))
				//pic|singer|songname|file_duration
				document.getElementById("music-play").pause();
				document.getElementById("music-play").src= res.data.bitrate.file_link;
				document.getElementById("music-play").play();
				console.log(res);
			}).catch(res=>{
				console.log(res);
			})
		},
	}
}
</script>

<style scoped>
.songname{
	width: 68%;
	height: 48px;
	font-size: 16px;
	line-height: 48px;
	margin: auto 1%;
	position: relative;
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.artistname{
	width: 30%;
	height: 48px;
	font-size: 16px;
	line-height: 48px;
	/*text-align: center;*/
	position: relative;
	float: right;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
hr{
	border: 1px solid rgb(249,249,249);
}
</style>