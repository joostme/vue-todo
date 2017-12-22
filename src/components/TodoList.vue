<template>
    <div>
        <TodoInput/>
        <ul>
            <li class="box" v-for="todo in todos" v-bind:key="todo.id">
                <div class="level">
                    <div class="level-left">
                        {{ todo.name }}
                    </div>
                    <div class="level-right">
                        <a class="button is-success" @click="toggleTodo(todo)">
                            Done
                        </a>
                    </div>
                </div>
            </li>
            <div class="empty" v-if="todos.length === 0">No open Todos. Yay :)</div>
            <hr v-if="doneTodos.length > 0">
            <li class="box done" v-for="todo in doneTodos" v-bind:key="todo.id">
                <div class="level">
                    <div class="level-left">
                        {{ todo.name }}
                    </div>
                    <div class="level-right">
                        <a class="button is-warning" @click="toggleTodo(todo)">
                            Reopen
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoInput from '@/components/TodoInput'
import { ActionType, GetterType } from '@/store/types'


export default {
    name: 'TodoList',
    computed: {
        ...mapGetters({
            todos: GetterType.GetOpenTodos,
            doneTodos: GetterType.GetDoneTodos
        })
    },
    methods: {
        toggleTodo(todo) {
            this.$store.dispatch(ActionType.Toggle_Todo, todo)
        }
    },
    components: {
        TodoInput
    }
}
</script>

<style lang="sass" scoped>
.done
  background-color: #cccccc

.empty
    text-align: center
</style>

