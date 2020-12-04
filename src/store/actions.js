import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCHSHOP
} from './mutations-type'
import {
  reqAddress,
  reqCategorys,
  reqLogout, reqSearchShop,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqShops,
  reqUserInfo,

} from '../api/index'

export default {

  async getAddress({commit, state}) {

    const geohash = state.latitude + "," + state.longitude
    const result = await reqAddress(geohash)

    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  recorduserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}, callback) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopinfo = result.data
      commit(RECEIVE_INFO, {shopinfo})
      callback && callback()
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopratings = result.data
      commit(RECEIVE_RATINGS, {shopratings})
      callback && callback()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopgoods = result.data
      commit(RECEIVE_GOODS, {shopgoods})
      callback && callback()
    }
  },
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  clearCart({commit}) {
    commit(CLEAR_CART )
  },
  async getSearchShops({commit, state},keyword) {
    const geohash = state.latitude + "," + state.longitude

    const result = await reqSearchShop(geohash,keyword)
    commit(RECEIVE_SEARCHSHOP, {shops: result.data})
  },

}
