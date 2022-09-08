import { defineStore } from 'pinia';
import { toRaw } from 'vue';

 export const useStore = defineStore('useStore', {
    state: () => ({
        monacoEditor: null
    }),
    getters: {
        monaco: (state) => toRaw(state.monacoEditor)
    },
    actions: {
        setMonacoEditor(instance) {
            this.monacoEditor = instance
        }
    }
})
