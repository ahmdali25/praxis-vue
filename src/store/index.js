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
        isApproved: true
      },
      {
        name: 'Albab',
        address: 'Sleman',
        program: 'Frontend',
        isApproved: true
      },
      {
        name: 'Andi',
        address: 'Temanggung',
        program: 'Frontend',
        isApproved: true
      },
      {
        name: 'Ikhsan',
        address: 'Kebumen',
        program: 'Frontend',
        isApproved: true
      }
    ],
    admin: {
      username : 'Ali',
      password : '1234',
      authenticated : false
    },
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
