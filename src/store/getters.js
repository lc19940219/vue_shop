export default {

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => food.count * food.price + preTotal, 0)
  },

  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  }
}
