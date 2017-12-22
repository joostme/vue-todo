import Vue from 'vue'
import Vuex from 'vuex'
import { ActionType, MutationType, GetterType } from './types'
import ApiService from '../api/api-service'

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
        },
        [ActionType.Load_Todos]: ({ commit }) => {
            ApiService.getAllTodos()
                .then(response => commit(MutationType.Todos_Loaded, response.data))
                .catch(error => console.log(error))
        }
    },
    mutations: {
        [MutationType.Todos_Loaded]: (state, todos) => {
            state.todos = todos
        },
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

export default store