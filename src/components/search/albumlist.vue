<template>
<div>
	<div class="album">
		<div class="artistpic"><img :src="artistpic" style="width: 48px;height: 48px;"></div>
		<div class="albumname">{{albumname}}</div>
	</div>
	
	<div class="artistname">{{artistname}}</div>
	<hr>
</div>
</template>

<script>
export default{
	props:["artistpic","artistname","albumid","albumname"],

}
</script>

<style scoped>
.album{
	width: 60%;
	height: 48px;
	position: relative;
	float: left;
}
.artistpic{
	width: 48px;
	height: 48px;
	position: relative;
	float: left;
	margin: auto 4% auto 2%;
}
.albumname{
	width: 60%;
	height: 48px;
	font-size: 16px;
	line-height: 48px;
	position: relative;
	float: left;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.artistname{
	width: 40%;
	height: 48px;
	font-size: 16px;
	line-height: 48px;
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