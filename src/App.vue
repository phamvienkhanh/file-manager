<template>
  <div>
    <div v-for='(colItem, indexCol) in listColumns' :key='indexCol' :style='styleColumn'>
      <div v-for='(tabItem , indexTab) in colItem.tabs' :key='indexTab'>
        <list-files v-bind:listFiles='getListFile(indexCol, indexTab)' v-bind:relativePath='targetPath(indexCol, indexTab)' v-bind:tabId='indexTab' v-bind:colId='indexCol'>
        </list-files>
      </div>
    </div>
  </div>
</template>

<script>

import ListFiles from './components/ListFiles.vue'

export default {
  name: 'App',
  components: {
    ListFiles
  },

  computed: {
      listColumns () {
        return this.$store.state.columns
      },

      styleColumn () {
        return {
          width: 100 / this.$store.state.columns.length + '%',
          float: 'left'
        }
      }
  },

  mounted () {
    var tabData = {
          tabs: [
            {
              targetPath: '',
              files: [
              ]
            }
          ]
        }
    this.$store.commit('addColumn', tabData)
    this.$store.dispatch('changePath', {path: '/', colId: 0, tabId: 0})
    this.$store.dispatch('changePath', {path: '/home/keithpham', colId: 1, tabId: 0})
  },
  
  data() {
    return {
    }
  },

  methods: {
    getListFile (colId, tabId) {
      return this.$store.state.columns[colId].tabs[tabId].files
    },

    targetPath (colId, tabId) {
      return this.$store.state.columns[colId].tabs[tabId].targetPath
    },

    enterPath(path) {
      if(path) {
        this.$store.dispatch('changePath', {path: path, colId: 0, tabId: 0})
      }
    }
  }
}

</script>

<style>

body {
  margin: 0px;
}

#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
</style>
