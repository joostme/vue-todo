<template>
    <div class="box">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input" type="text" placeholder="Add a new Todo" v-model="todoName">
            </div>
            <div class="control">
                <a class="button is-info" @click="addTodo()">
                    Add
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { ActionType } from '@/store/types'

export default {
    name: 'TodoInput',
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        addTodo() {
            this.$store.dispatch(ActionType.Add_Todo, { name: this.todoName })
        }
    }
}
</script>

<style>

</style>
