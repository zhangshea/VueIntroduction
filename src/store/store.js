import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, new_todo){
      state.todos.push({
        body: new_todo.body,
        owner: new_todo.owner,
        completed: false
      })
    },
    CHANGE_TODO(state, find_todo){
      for (let i in state.todos) {
        let todo = state.todos[i];
        if (todo.body === find_todo.body && todo.owner === find_todo.owner) {
            console.log("before", todo);
            todo.owner = (3 - +(todo.owner)) + "";
            console.log("after", todo);
            break;
        }
      }
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
    }
  },
  actions: {
    addTodo({commit}, new_todo){
      commit('ADD_TODO', new_todo)
    },
    changeTodo({commit}, todo){
      commit('CHANGE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    }
  },
  getters: {
    todos: (state) => (id) => {
        return state.todos.filter((todo) => {
          return !todo.completed && todo.owner === id
        })
    }
  }
})
