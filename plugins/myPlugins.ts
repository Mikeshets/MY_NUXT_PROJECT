export default defineNuxtPlugin(nuxtApp => {
    // console.log(nuxtApp)
    // addRouteMiddleware('global-test', () => {
    //     console.log('This global middleware was added in a plugin and will be run on every route change')
    //   }, { global: true })
    
    //   addRouteMiddleware('custom-test', () => {
    //     console.log('This custom middleware was added in a plugin and would override any existing middleware of the same name')
    //   })
    return {
        provide: {
            sayHello: (msg: string) => console.log(`Hello ${msg}`)
        }
    }
  })