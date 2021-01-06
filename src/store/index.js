import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {isApproved: true}
    ],
    admin: {
      username : 'Ali',
      password : '1234'
    },
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload)
    },

    loginAdmin(state, payload){
      state.admin = payload
    }
  },
  actions: {
    actionUsers(store, payload) {
      store.commit('addUsers', payload)
    },

    login(store, payload) {
     store.commit('loginAdmin', payload)
    }
  },
})
