import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Messages from './components/Messages'
import Profile from './components/Profile'
import '!script!jquery'

/* eslint-disable */
Vue.use(VueRouter)
require("bootstrap-webpack")
// Globally register bootstrap-vue components
const router = new VueRouter({  
	mode: 'history',
	routes:  [
		{ path: '/', component: Home},
		{ path: '/messages', component: Messages},
		{ path: '/profile', component: Profile},
		{ path: '*', redirect: '/'}
	]
})
/* eslint-disable */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App }
})
