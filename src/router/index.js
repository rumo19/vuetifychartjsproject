import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'
import AppAbout from '@/components/AppAbout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout
    }
  ]
})
