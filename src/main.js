import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import Routes from './Routes'
// import Embed from 'v-video-embed'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.components("Rubriques", () => import("./components/rubriques/Rubriques"))

const router = new VueRouter ( {
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
