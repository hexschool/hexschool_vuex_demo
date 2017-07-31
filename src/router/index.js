import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import User from '@/components/User'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/List',
      component: List
    },
    {
      path: '/User',
      component: User
    }
  ]
})
