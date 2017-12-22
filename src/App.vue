<template>
    <div id="app" class="container">
        <router-view/>
    </div>
</template>

<script>
import { ActionType } from './store/types'
export default {
    name: 'app',
    created() {
        this.$store.dispatch(ActionType.Load_Todos)
    }
}
</script>

<style lang="sass">
@import '~bulma/bulma';
#app
  margin-top: 2rem;
  margin-bottom: 2rem;
</style>
