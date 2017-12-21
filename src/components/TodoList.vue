<template>
    <div>
        <TodoInput/>
        <ul>
            <li  class="box" v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{ 'done': todo.done }">
                <div class="level">
                    <div class="level-left">
                        {{ todo.name }}
                    </div>
                    <div class="level-right">
                        <a class="button" @click="toggleTodo(todo)">Toggle</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoInput from '@/components/TodoInput'


export default {
    name: 'TodoList',
    computed: mapGetters({
        todos: 'getTodos'
    }),
    methods: {
        toggleTodo(todo) {
            this.$store.dispatch('TOGGLE_TODO', todo)
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
</style>

