import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const module = {
  state: {
    todos: [{
      name: 'eat a pizza',
      done: false
    }, {
      name: 'work',
      done: false
    }]
  },
  getters: {
    todosLength(state) {
      return state.todos.length
    }
  },
  mutations: {
    incrementer (state, payload) {
      state.compteur += payload;
    }
  },
  actions: {
    async tryGetAPI(context) {
      const reponse = await axios.get("URL_API.json")
      context.commit('getAPISuccess', reponse.data)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    module
  }
})

export default store