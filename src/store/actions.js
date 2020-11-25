import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutations-type'
import {reqAddress, reqCategorys, reqShops} from '../api/index'

export default {

  async getAddress({commit, state}) {

    const geohash = state.latitude + "," + state.longitude
    const result = await reqAddress(geohash)

    commit(RECEIVE_ADDRESS, {address: result.data})
  },

  async getCategorys({commiy}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
  async getShops({commiy, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_CATEGORYS, {shops: result.data})
  },
}
