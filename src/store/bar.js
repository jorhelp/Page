import { defineStore } from 'pinia'


const useBarStore = defineStore('bar', {
    state: () => {
        return {
            battery: 100,
            cellular: 3
        }
    },
    actions: {
        setBattery(val) {
            if (val >=0 && val <= 100) this.battery = val
        },
        setCellular(val) {
            if (val >= 0 && val <= 4) this.cellular = val
        }
    },
})

export default useBarStore