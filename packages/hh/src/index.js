class Hero {}

const sleep = t => new Promise(resolve => setTimeout(resolve, t * 1000))

export default {
  init: () => {
    this.a = new Hero()
  },

  check: () => {
    console.log([1, 2, 3].includes(4))
    console.log(this.a)
  },

  run: async () => {
    await sleep(3)
    console.log('done')
  },

  sleep: () => {
    console.log('sleep')
  },

  swimming: () => {}
}
