<template>
<div id="search-body">
	<input type="search" id="input" @keyup.enter="search()" placeholder="搜索音乐、歌手" v-model="searchWord">
	<span><img class="search-icon" src="/static/search.png" @click="search()"></span>
	<div id="result">
		<div>
			<div class="search-nav">单曲</div>
			<div class="search-nav">歌手</div>
			<div class="search-nav">专辑</div>
		</div>
		<hr>
		<div v-for="(item,index) in songList" v-show = "issong">
			<songlist :songname="item.songname"
			:artistname="item.artistname"
			:songid="item.songid"></songlist>
		</div>
		<!-- <div v-for="(item,index) in artistList" v-show = "isartist">
			<artistlist></artistlist>
		</div> -->
		<!-- <div v-for="(item,index) in albumList" v-show = "isalbum">
			<albumlist></albumlist>
		</div> -->
	</div>
</div>

</template>

<script>
import songlist from "./songlist.vue"

export default{
	components:{
		songlist,
	// 	artistlist,
	// 	albumlist
	},
	data(){
		return{
			issong:true,
			isartist:false,
			isalbum:false,
			searchWord:"",
			songList:[],
			artistList:[],
			albumList:[],
		}
	},
	methods:{
		search(){
			this.clear();
			this.$axios.get(this.SEARCH_HOST,{
				params: {
					"method": "baidu.ting.search.catalogSug",
					"query":this.searchWord
				}
			}).then(res=>{
				console.log(res);
				var _this = this;
				for (var i=0; i<res.data.song.length; i++){
					let a={};
					a.songname = res.data.song[i].songname;
					a.artistname = res.data.song[i].artistname;
					a.songid = res.data.song[i].songid;
					_this.songList.push(a);
				}
				for (var i=0; i<res.data.artist.length; i++){
					let b={};
					b.artistname = res.data.artist[i].artistname;
					b.artistpic = res.data.artist[i].artistpic;
					b.artistid = res.data.artist[i].artistid;
					_this.artistList.push(b);
				}
				for (var i=0; i<res.data.album.length; i++){
					let c={};
					c.artistname = res.data.album[i].artistname;
					c.albumname = res.data.album[i].albumname;
					c.artistpic = res.data.album[i].artistpic;
					c.albumid = res.data.album[i].albumid;
					_this.albumList.push(c);
				}
			}).catch(res=>{
				console.log(res);
			})
		},
		clear: function(){
			var _this = this;
			this.songList.splice(0,this.songList.length);
		},
	}
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
	#search-body{
		width: 70%;
	}
}
@media screen and (min-width: 768px) and (max-width: 926px) {
	#search-body{
		width: 75%;
	}
}
@media screen and (min-width: 926px) {
	#search-body{
		width: 80%;
	}
}
#search-body{
	/*width: 80%;*/
	height: 90%;
	left: 184px;
	top: 0;
	position: absolute;
	/*border: 1px solid;*/
}
#input{
	background-color: #FFF;
	width: 85%;
	margin: 24px 0 24px 5%;
	padding: 8px;
	font-size: 18px;
}
.search-icon{
	height: 34px;
	width: 34px;
	position: absolute;
	top: 28px;
	margin-left: 16px;
	/*margin: 32px 8px;*/
}
#result{
	width: 90%;
	height: 83%;
	margin: auto 5%;
	/*border: 1px solid;*/
}
.search-nav{
	width: 46px;
	height: 32px;
	line-height: 32px;
	font-size: 20px;
	position: relative;
	float: left;
	margin: 8px 16px;
}
hr{
	width: 98%;
	margin: 8px 1%;
	border: 1px solid rgb(211,211,211);
}
</style>