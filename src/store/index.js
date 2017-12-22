import Vue from 'vue'
import Vuex from 'vuex'
import { ActionType, MutationType, GetterType } from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: []
    },
    actions: {
        [ActionType.Add_Todo]: ({ commit }, todo) => {
            commit(MutationType.Add_Todo, todo)
        },
        [ActionType.Toggle_Todo]: ({ commit }, todo) => {
            commit(MutationType.Toggle_Todo, todo)
        }
    },
    mutations: {
        [MutationType.Add_Todo]: (state, todo) => {
            state.todos.push(Object.assign({ id: state.todos.length + 1, done: false }, todo))
        },
        [MutationType.Toggle_Todo]: (state, todo) => {
            todo.done = !todo.done
        }
    },
    getters: {
        [GetterType.GetDoneTodos]: (state, getters) => {
            return state.todos.filter(todo => todo.done)
        },
        [GetterType.GetOpenTodos]: (state, getters) => {
            return state.todos.filter(todo => !todo.done)
        }
    }
})

store.dispatch(ActionType.Add_Todo, { name: 'Check out VueJS' })
store.dispatch(ActionType.Add_Todo, { name: 'Make some coffee' })
store.dispatch(ActionType.Add_Todo, { name: 'Check out Vuex' })

export default store