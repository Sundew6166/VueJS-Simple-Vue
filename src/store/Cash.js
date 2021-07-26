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
      payload.total += parseInt(payload.income) - parseInt(payload.expense) + state.data[state.data.length-1].total
      console.log(payload.total);
      state.data.push(payload)
    },
    total(state, { payload }) {
      
    }
  },

  actions: {
    fetchCash ({ commit }) {
        let res = {
            data: [
                {
                  date: '20/7/21',
                  list: 'เงินเดือน',
                  income: 50000,
                  expense: 0,
                  total: 50000
                },
                {
                  date: '20/7/21',
                  list: 'ค่าหอ',
                  income: 0,
                  expense: 6500,
                  total: 50000-6500
                },
            ]
        }
        commit('fetch', { res })
      },

      addCash( { commit }, payload) {
        commit('add', { payload }) 
    },

      totalCash({ commit }, payload) {
        commit('total', { payload }) 
      }
  },

  modules: {},
})
