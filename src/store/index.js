import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 存放狀態
const state = {
  msg: 'Welcome to Your Vue.js App',
  username: 'Casper',
  status: '線上',
  listData: []
}

const getters = {
  getList (state) {
    return state.listData
  }
}

const actions = {}

const mutations = {
  UPDATE_DATA (state, data) {
    state.listData = data

    // Vue 對於新增的物件沒有辦法追蹤
    // 可以使用 Vue.set 來管理
    // Vue.set({物件}, 屬性, 值)
    state.listData.forEach(function (item) {
      Vue.set(item, 'selected', false)
    })
  },
  UPDATE_STATUS (state, i) {
    state.listData[i].selected = !state.listData[i].selected
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
