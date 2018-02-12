<template>
<div>
	<div class="songname">{{songname}}</div>
	<div class="artistname">{{artistname}}</div>
	<hr>
</div>
</template>

<script>
export default{
	props:["songname","artistname","songid"],

}
</script>

<style scoped>
.songname{
	width: 68%;
	height: 32px;
	font-size: 16px;
	line-height: 32px;
	margin: auto 1%;
	position: relative;
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.artistname{
	width: 30%;
	height: 32px;
	font-size: 16px;
	line-height: 32px;
	/*text-align: center;*/
	position: relative;
	float: right;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
</style>