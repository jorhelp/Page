import { defineStore } from 'pinia'


const useBarStore = defineStore('bar', {
    state: () => {
        return {
            battery: 80,
            cellular: 3
        }
    }
})

export default useBarStore