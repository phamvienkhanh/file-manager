<template>
  <li v-for="file in listFiles" :key="file" v-on:click='fileClick(file)'>
    {{ file }}
  </li>
</template>

<script>
export default {
	name: 'ListFiles',

	props: ['listFiles', 'relativePath'],

	emits: ['onFileClick'],

	methods: {
		fileClick (fileName) {
			var fullPath = this.relativePath + '/' + fileName
			this.$store.dispatch('changePath', {path: fullPath})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>