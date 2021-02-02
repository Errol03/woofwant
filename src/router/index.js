import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

// import Cart from '../views/Cart.vue'
// import Note from '../views/Note.vue'
// import Contact from '../views/Contact.vue'
// import Products from '../views/Products.vue'
// import Login from '../views/Login.vue'
// import Reg from '../views/Reg.vue'
Vue.use(VueRouter)
const routes = [
  // 首頁
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Woofwant',
      login: false
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    // route level code-splitting
    // this generates a separate chunk (reg.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      title: 'woofwant/註冊',
      login: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'woofwant/登入',
      login: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: 'Woofwant',
      login: false
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'Woofwant',
      login: false
    }
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import(/* webpackChunkName: "note" */ '../views/Note.vue'),
    meta: {
      title: 'Woofwant',
      login: false
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () =>
      import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      title: 'Woofwant',
      login: false
    }
  },
  {
    path: '/hand',
    name: 'Hand',
    component: () => import(/* webpackChunkName: "hand" */ '../views/Hand.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/body',
    name: 'Body',
    component: () => import(/* webpackChunkName: "body" */ '../views/Body.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/leg',
    name: 'Leg',
    component: () => import(/* webpackChunkName: "leg" */ '../views/Leg.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/tail',
    name: 'Tail',
    component: () => import(/* webpackChunkName: "tail" */ '../views/Tail.vue'),
    meta: {
      login: false
    }
  },
  {
    path: '/productsheadone',
    name: 'Productsheadone',
    component: () =>
      import(
        /* webpackChunkName: "productsheadone" */ '../views/Productsheadone.vue'
      ),
    meta: {
      login: false
    }
  },
  {
    path: '/productsbodyone',
    name: 'Productsbodyone',
    component: () =>
      import(
        /* webpackChunkName: "productsbodyone" */ '../views/Productsbodyone.vue'
      ),
    meta: {
      login: false
    }
  },
  {
    path: '/productsbodytwo',
    name: 'Productsbodytwo',
    component: () =>
      import(
        /* webpackChunkName: "productsbodytwo" */ '../views/Productsbodytwo.vue'
      ),
    meta: {
      login: false
    }
  },
  {
    path: '/write',
    name: 'Write',
    component: () =>
      import(/* webpackChunkName: "write" */ '../views/Write.vue'),
    meta: {
      login: false
    }
  }
]

const router = new VueRouter({
  routes
})
// 進入每個頁面後
// to去哪 from到哪
router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user.id) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  let title = ''
  if (to.name === 'Cart') {
    title = store.state.user.name + 'Woofwant'
  } else {
    title = to.meta.title
  }
  document.title = title
})

export default router
