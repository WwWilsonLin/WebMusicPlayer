import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
    	path: '/search',
    	name: 'search',
    	component: search
    }
  ]
})
