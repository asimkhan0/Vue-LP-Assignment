import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [new VuexPersistence().plugin],
  state: {
    newsArr: [],
    searchTerm: '',
    sortTerm: ''
  },
  getters: {
    getNewsData: state => state.newsArr,
    
    getNewsById: state => id => { 
      let index = state.newsArr.findIndex(news => news.id == id)
      return state.newsArr[index]
    },
    getSortTerm: state => state.sortTerm,
    getSearchTerm: state => state.searchTerm
  },
  mutations: {
    setNewsData (state, data) {
      state.newsArr = data
    },
    setSortTerm: (state, sortTerm) => state.sortTerm = sortTerm,
    setSearchTerm: (state, searchTerm) => state.searchTerm = searchTerm
  },
  actions: {
    fetchNewsDataAPICall ({ state, commit }) {
      if (!state.newsArr.length) {
        axios.get('/data/news.json').then(response => {
          commit('setNewsData', response.data)
        })
      }
    },
    sortTermChange ({ commit }, data) {
      commit('setSortTerm', data)
    },
    searchTermChange ({ commit }, data) {
      commit('setSearchTerm', data)
    }
  }
})
