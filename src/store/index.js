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
      },
      {
        name: 'Diko',
        address: 'Sleman',
        program: 'Mobile',
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
    userProgramFrontend: state => {
      let counter = 0
      for (const obj of state.users) {
        if (obj.program === 'Frontend')
        counter++;
      }
      return counter
    },
    userProgramBackend: state => {
      let counter = 0
      for (const obj of state.users) {
        if (obj.program === 'Backend')
        counter++;
      }
      return counter
    },
    userProgramMobile: state => {
      let counter = 0
      for (const obj of state.users) {
        if (obj.program === 'Mobile')
        counter++;
      }
      return counter
    }
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    },
    deleteUser(state, payload) {
      for(let i = 0; state.users.length; i++) {
        if(state.users[i].name === payload) {
          state.users.splice(i, 1);
          break;
        }
      }
    },
    loginAdmin(state, payload){
      state.admin = payload
    },
    setAuthentication(state, status) {
      state.authenticated = status
    },
  },
  actions: {
    addUser(store, payload) {
      store.commit('addUser', payload)
    },
    deleteUser(store,payload) {
      store.commit('deleteUser', payload)
    },
    login(store, payload) {
     store.commit('loginAdmin', payload)
    }
  },
})
