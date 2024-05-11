export const useCountStore = defineStore({
  id: 'count',
  state: () => ({
    task: 0,
  }),
  actions: {
    increment() {
      console.log('Incrementing task...')
      this.task++
    },
    decrement() {
      console.log('Decrementing task...')
      this.task--
    },
    reset() {
      console.log('Resetting task...')
      this.task = 0
    },
  },
})