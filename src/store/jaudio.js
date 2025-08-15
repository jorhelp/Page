import { defineStore } from 'pinia'


const useAudioStore = defineStore('audio', {
    state: () => ({
        ap: null,
        is_paused: true,
        cur_idx: 0
    }),
    actions: {
        set_ap(val) {
            this.ap = val
        },
        set_pause(val) {
            this.is_paused = val
        },
        set_cur_idx(val) {
            this.cur_idx = val
        }
    },
    getters: {
        is_ap_created: state => state.ap !== null
    }
})

export default useAudioStore