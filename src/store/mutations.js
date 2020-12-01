import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutations-type'

export default {

  [RECEIVE_ADDRESS](state, {address}) {

    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {

    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {

    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {

    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {

    state.userInfo = {}
  },
  [RECEIVE_GOODS](state, {shopgoods}) {
    state.goods = shopgoods
  },
  [RECEIVE_RATINGS](state, {shopratings}) {
    state.ratings = shopratings
  },
  [RECEIVE_INFO](state, {shopinfo}) {
    state.info = shopinfo
  }
}
