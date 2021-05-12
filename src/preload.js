import { ipcRenderer, contextBridge } from 'electron'
window.ipcRenderer = ipcRenderer

contextBridge.exposeInMainWorld(
  'electron',
  {
    ipcRenderer: ipcRenderer
  }
)