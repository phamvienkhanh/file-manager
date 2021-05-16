<template>
	<ul>
		<li v-for="file in listFiles" :key="file" v-on:click='fileClick(file)'>
		{{ file }}
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
}

ul::-webkit-scrollbar {
    display: none;
}

</style>