import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ben',
      name: 'ben',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Ben.vue'),
      children:[
        {
          path:'info',
          name:'ben-info',
          component: () => import(/* webpackChunkName: "about" */ './views/Beninfo.vue'),
        },
        {
          path:'text',
          name:'ben-text',
          component: () => import(/* webpackChunkName: "about" */ './views/Bentext.vue'),
        }
      ],
 
   
    }
  ]
})
