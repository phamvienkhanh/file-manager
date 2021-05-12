import { createStore } from 'vuex'

const appStore = createStore({
	state(){
		return {
			columns: [
				{
					tabs: [
						{
							targetPath: '',
							files: [
							]
						}
					]
				}
			]
		}
	},

	mutations: {
		changeListFiles (state, payload) {
			var curData = state.columns[payload.colId].tabs[payload.tabId]
			curData.targetPath = payload.targetPath
			curData.files = payload.files

			state.columns[payload.colId].tabs[payload.tabId] = curData
		}
	},

	actions: {
		changePath ({commit}, payload) {
			window.electron.ipcRenderer.invoke("onMesg", payload.path)
				.then((files) => {
					var newData = {
						targetPath: payload.path,
						files: files,
						colId: 0,
						tabId: 0
					}

					commit('changeListFiles', newData)
				})
		}
	}
})

export default appStore