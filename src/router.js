import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
/*import Find from './views/Find.vue'
import SongList from './views/SongList.vue'
import Mine from './views/Mine.vue'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/SongList',
      name: 'SongList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SongList.vue')
    },
    {
      path: '/Find',
      name: 'Find',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Find.vue')
    },
    {
      path: '/Mine',
      name: 'Mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Mine.vue')
    },
    {
      path: '/SongDesc/:id',
      name: 'SongDesc',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/SongDesc.vue')
    }
  ]
})
