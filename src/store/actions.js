import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO} from './mutations-type'
import {reqAddress, reqCategorys, reqLogout, reqShops, reqUser} from '../api/index'

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
  // recorduserInfo({commit}, userInfo) {
  //
  //
  //   commit(RECEIVE_USER_INFO, {userInfo})
  // },
  async getuserInfo({commit}) {
    const result = await reqUser()
    commit(RECEIVE_USER_INFO, {userInfo: result.data})
  },
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }

  },
}