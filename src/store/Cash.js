import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [],
    },

  getters: {
    cashs: (state) => state.data,
    },

  mutations: {
    fetch(state, { res }) {
        state.data = res.data
    },
    add (state, { payload }) {
      state.data.push(payload)
    }
  },

  actions: {
    fetchCash ({ commit }) {
        let res = {
            data: [
                {
                  date_list: {
                    date: '20/7/21',
                    list: 'เงินเดือน',
                    income: 50000,
                    expense: 0
                  }
                },
                {
                  date_list: {
                    date: '20/7/21',
                    list: 'ค่าหอ',
                    income: 0,
                    expense: 6500
                  }
                },
            ]
        }
        commit('fetch', { res })
      },

      addCash( { commit }, payload) {
        commit('add', { payload }) 
    }
  },

  modules: {},
})
