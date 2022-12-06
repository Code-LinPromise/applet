import { defineStore } from 'pinia'



export const useAddData = defineStore('addData', {
    state: () => {
        return {
            max:5 as number
        }
    }
  })