import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/MSite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [{
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
      showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
      showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
      showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
      showFooter: true
      }
    }
  ]
})
