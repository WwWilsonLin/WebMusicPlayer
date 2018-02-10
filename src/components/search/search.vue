<template>
<div id="search-body">
	<input type="search" id="input" @keyup.enter="search(searchWord)" placeholder="搜索音乐、歌手" v-model="searchWord">
	<span></span>
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
#search-body{
	width: 80%;
	height: 91%;
	left: 184px;
	top: 0;
	position: absolute;
}
#input{
	background-color: #FFF;
	width: 60%;
	margin: 24px 10%;
	padding: 8px;
	font-size: 18px;
}
</style>