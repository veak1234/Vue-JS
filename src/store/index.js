
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => ({
      count: 0,
      name: 'Banana',
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        status(state) {
            if (state.count >= 10) {
                return 'success';
            } else {
                return 'failed';
            }
        }
    },
    actions:{
        increment(){
            this.count++
        },
        decrement(){
            if(this.count === 0){
                return this.count = 0;
            }else{
                return this.count--
            }
        },
        reset(){
            this.count = 0
        }
    }
})