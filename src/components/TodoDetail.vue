<template>
    <div class="box">
        <h1> {{ todo.name }} </h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ActionType, GetterType } from '@/store/types'

export default {
    beforeMount() {
        this.$store.dispatch(ActionType.Select_Todo, this.$route.params.id)
    },
    computed: {
        ...mapGetters({
            todo: GetterType.GetSelectedTodo
        })
    }
}
</script>
