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
        body: new_todo,
        completed: false
      })
    },
    REMOVE_TODO(state, todo){
      let todo = state.todos;
      todo.splice(todo.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
    }
  },
  actions: {
    addTodo({commit}, new_todo){
      commit('ADD_TODO', new_todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    }

  },
  getters: {
    todos: state => state.todos.filter((todo) => {return !todo.completed}),
  }
})
