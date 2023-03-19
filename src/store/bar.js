import { defineStore } from 'pinia'


const Bar = defineStore('bar', {
    state: () => {
        return {
            battery: 80,
            cellular: 3
        }
    }
})

export default Bar