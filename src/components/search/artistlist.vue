<template>
<div>
	<div class="artistpic"><img :src="artistpic" style="width: 48px;height: 48px;"></div>
	<div class="artistname">{{artistname}}</div>
	<hr>
</div>
</template>

<script>
export default{
	props:["artistpic","artistname","artistid"],
}
</script>

<style scoped>
.artistpic{
	width: 10%;
	height: 48px;
	position: relative;
	float: left;
	margin: auto 2%;
}
.artistname{
	width: 86%;
	height: 48px;
	font-size: 16px;
	line-height: 48px;
	position: relative;
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
hr{
	border: 1px solid rgb(249,249,249);
}
</style>