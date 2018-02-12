<template>
<div id="search-body">
	<input type="search" id="input" @keyup.enter="search()" placeholder="搜索音乐、歌手" v-model="searchWord">
	<span><img class="search-icon" src="/static/search.png" @click="search()"></span>
	<div id="result">
		<div>
			<div class="search-nav">单曲</div>
			<div class="search-nav">歌手</div>
		</div>
		<hr>
		<!-- <result></result> -->
	</div>
</div>

</template>

<script>
export default{
	data(){
		return{
			searchWord:"",
		}
	},
	methods:{
		search(){
			// this.clear();
			this.$axios.get(this.SEARCH_HOST,{
				params: {
					"method": "baidu.ting.search.catalogSug",
					"query":this.searchWord
				}
			}).then(res=>{
				console.log(res);
			}).catch(res=>{
				console.log(res);
			})
		},
		// clear: function(){
		// 	var _this = this;
		// 	this.searchlist.splice(0,this.searchlist.length);
		// },
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