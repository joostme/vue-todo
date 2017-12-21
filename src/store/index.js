import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: []
    },
    actions: {
        ADD_TODO({ commit }, todo) {
            commit('ADD_TODO', todo)
        },
        TOGGLE_TODO({ commit }, todo) {
            commit('TOGGLE_TODO', todo)
        }
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(Object.assign({ id: state.todos.length + 1, done: false }, todo))
        },
        TOGGLE_TODO(state, todo) {
            todo.done = !todo.done
        }
    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    }
})

store.dispatch('ADD_TODO', { name: 'Check out VueJS' })
store.dispatch('ADD_TODO', { name: 'Make some coffee' })
store.dispatch('ADD_TODO', { name: 'Check out Vuex' })


export default store