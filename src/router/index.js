import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/MSite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

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
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    }
  ]
})
