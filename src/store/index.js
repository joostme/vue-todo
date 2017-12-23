import Vue from 'vue'
import Vuex from 'vuex'
import { ActionType, MutationType, GetterType } from './types'
import ApiService from '../api/api-service'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: [],
        selectedTodoId: null
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
        },
        [ActionType.Select_Todo]: ({ commit }, todoId) => {
            commit(MutationType.Select_Todo, todoId)
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
        },
        [MutationType.Select_Todo]: (state, todoId) => {
            state.selectedTodoId = todoId
        }
    },
    getters: {
        [GetterType.GetDoneTodos]: state => {
            return state.todos.filter(todo => todo.done)
        },
        [GetterType.GetOpenTodos]: state => {
            return state.todos.filter(todo => !todo.done)
        },
        [GetterType.GetSelectedTodo]: state => {
            return state.todos[state.selectedTodoId - 1]
        }
    }
})

export default store