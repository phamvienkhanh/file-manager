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

			console.log(payload)

			var curData = state.columns[payload.colId].tabs[payload.tabId]
			curData.targetPath = payload.targetPath
			curData.files = payload.files

			state.columns[payload.colId].tabs[payload.tabId] = curData
		},

		addColumn (state, payload) {
			state.columns.push(payload)
		}
	},

	actions: {
		changePath ({commit}, payload) {
			window.electron.ipcRenderer.invoke("getListFiles", payload.path)
				.then((files) => {
					var newData = {
						targetPath: payload.path,
						files: files,
						colId: payload.colId,
						tabId: payload.tabId
					}

					commit('changeListFiles', newData)
				})
		}
	}
})

export default appStore