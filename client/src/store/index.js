import { createStore } from 'vuex'
import { login } from '../http/UserApi'
import { getParticipants } from '../http/ParticipantsApi'

export default createStore({
  state: {
    isAuth: !!sessionStorage.getItem('isAuth'),
    userEmail: '',
    participants: [],
  },
  mutations: {
    setAuth(state, newState) {
      state.isAuth = newState
      sessionStorage.setItem('isAuth', true)
    },
    setUserEmail( state, email) {
      state.userEmail = email
    },
    setParticipants( state, newState) {
      state.participants = newState
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await login(email, password)

      const { data } = response

      if (data.token) {
        commit('setAuth', true)
        commit('setUserEmail', email)
      }

      console.log(response);
    },

    async getParticipants({ commit }) {
      const response = await getParticipants()

      const filtredParticipants = response.data.filter((el) => el.firstName && el.secondName)

      commit('setParticipants', filtredParticipants)
    }

  },
  getters: {
    isAuth: (state) => ( state.isAuth || !!sessionStorage.getItem('isAuth')),
    userEmail: (state) => state.userEmail,
    participants: (state) => state.participants
  }
})
