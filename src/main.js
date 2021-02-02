import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// vuesax icon

// 必要引用
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// 根據 icon 的種類引用
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee, faGooglePlus)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuesax, {})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
