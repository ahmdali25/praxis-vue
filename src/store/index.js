import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'Ali',
        address: 'Purworejo',
        program: 'Frontend',
        isApproved: false
      },
      {
        name: 'Albab',
        address: 'Sleman',
        program: 'Frontend',
        isApproved: false
      },
      {
        name: 'Andi',
        address: 'Temanggung',
        program: 'Frontend',
        isApproved: false
      },
      {
        name: 'Evan',
        address: 'Surabaya',
        program: 'Backend',
        isApproved: false
      }
    ],
    admin: {
      username : 'Ali',
      password : '1234',
      authenticated : false
    },
  },
  getters: {
    allUsers(state) {
      return state.users.length
    }
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload)
    },

    loginAdmin(state, payload){
      state.admin = payload
    },
    setAuthentication(state, status) {
      state.authenticated = status
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
