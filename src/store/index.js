import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from 'axios'
export default createStore({
  state: {
    users: []
  },
  /*
   ** MUTATIONS(동기 처리)
   */
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  /*
   ** GETTERS
   */
  getters: {
    getUsers: (state) => state.users
  },
  /*
   ** ACTIONS (비동기처리)
   */
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})

//store의 핵심 구성 요소들은 state, mutations, actions, getters이다.
