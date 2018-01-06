<template>
    <div class="card">
        <div class="card-contents">
            <button class="button" @click="fetch">
                Fetch
            </button>
            <hr>

            Finished Todos
            <ul>
                <li v-for="todo in finishedTodos">
                        {{todo.title}}
                    <button class="button is-primary" @click="toggleTodo(todo)">
                        Toggle
                    </button>
                    <button class="button is-danger" @click="removeTodo(todo)">
                        Remove
                    </button>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        name: "todos",
        computed: {
            ...mapState([
                'todos'
            ]),
            ...mapGetters([
                'finishedTodos',
                'unfinishedTodos'
            ])
        },
        methods: {
            ...mapMutations({
                removeTodo: 'REMOVE_TODO',
                toggleTodo: 'TOGGLE_TODO'
            }),
            fetch() {
                this.$store.dispatch('fetchTodos');
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>