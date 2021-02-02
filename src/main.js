import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'
import VueCarousel from 'vue-carousel'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import animateScrollTo from 'animated-scroll-to'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueScrollTo from 'vue-scrollto'

// 燈箱
import Photoswipe from 'vue-pswipe'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
Vue.use(Photoswipe)

Vue.use(VueScrollTo)

axios.defaults.withCredentials = true

Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})
Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)

// animateScrollTo(500).then(hasScrolledToPosition => {
//   // scroll animation is finished

//   // "hasScrolledToPosition" indicates if page/element
//   // was scrolled to a desired position
//   // or if animation got interrupted
//   if (hasScrolledToPosition) {
//     // page is scrolled to a desired position
//   } else {
//     // scroll animation was interrupted by user
//     // or by another call of "animateScrollTo"
//   }
// })
library.add(faShoppingCart, faFacebookSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// {
//   modules: [
//     'vue-scrollto/nuxt',

//     // Or if you have custom options...
//     ['vue-scrollto/nuxt', { duration: 300 }]
//   ]
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
