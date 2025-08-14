import { defineStore } from 'pinia'


const useAudioStore = defineStore('audio', {
    state: () => ({
        ap: null
    }),
    actions: {
        set_ap(val) {
            this.ap = val
        }
    },
    getters: {
        is_ap_created: state => state.ap !== null
    }
})

export default useAudioStore