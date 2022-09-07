import { defineStore } from 'pinia'

 export const useStore = defineStore('useStore', {
    state: () => ({
        monacoEditor: null
    }),
    actions: {
        setMonacoEditor(instance) {
            this.monacoEditor = instance
        }
    }
})
