<template>
	<ul>
		<li v-for="(file, index) in listFiles" :key="file" v-on:click='fileClick(file)' :style="styleItem(index)">
		<div>
			{{ file }}
		</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'ListFiles',

	props: ['listFiles', 'relativePath', 'tabId', 'colId'],

	emits: ['onFileClick'],

	methods: {
		fileClick (fileName) {
			var fullPath = this.relativePath + '/' + fileName
			this.$store.dispatch('changePath', {path: fullPath, colId: this.colId, tabId: this.tabId})
		},

		styleItem (index) {
			var color = index % 2 === 0 ?  '#1eae98' : '#a9f1df'
			return {
				backgroundColor: color
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
	margin: 0px 0px 0px 0px;
	height: 100vh;
	overflow:hidden; 
	overflow-y:scroll;
	list-style-type: none;
}

li {
	height: 30px;
}

li div {
	line-height: 30px;
	padding-left: 4px;
	cursor: default;
}

li div:hover {
	background-color: #3d84b8;
	color: white;
}

ul::-webkit-scrollbar {
    display: none;
}



</style>