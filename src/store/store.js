import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
  goodsNum: 0
}

const mutations = {
  addGoodsNum (state, num) {
    state.goodsNum = state.goodsNum + num
  }
}

// 暴露给组件去调用的
const actions = {
  addGoodsNumHandle ({commit, state}, param) {
    commit('addGoodsNum', param.num)
  }
}

// 暴露给组件去展示的
const getters = {
  getGoodsNum (state) {
    return state.goodsNum
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
