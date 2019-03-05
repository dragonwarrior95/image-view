import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import index from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: App },
    { path: '/index', component: index }
    // { path: '/', name: 'index', component: index }
  ]
})
