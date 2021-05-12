<template>
  <input id='inputPath' :value="targetPath" v-on:keyup.enter="enterPath($event.target.value)">
  <list-files v-bind:listFiles='currentListFiles' v-bind:relativePath='targetPath'> </list-files>
</template>

<script>

import ListFiles from './components/ListFiles.vue'

export default {
  name: 'App',
  components: {
    ListFiles
  },

  computed: {
      currentListFiles() {
        return this.$store.state.columns[0].tabs[0].files
      },
      targetPath() {
        return this.$store.state.columns[0].tabs[0].targetPath
      }
  },
  
  data() {
    return {
    }
  },

  methods: {
    enterPath(path) {
      if(path) {
        this.$store.dispatch('changePath', {path: path})
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#inputPath {
  width: 100%
}
</style>
