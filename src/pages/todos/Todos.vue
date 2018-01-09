<template>
    <div class="card">
        <div class="card-contents">


            <input type="text" v-model="newTodo" title="New To-Do">

            <button class="button is-success" @click="addTodo(newTodo); newTodo=null;">
                Add
            </button>

            <hr>
            <button class="button is-dark" @click="fetch">
                Fetch
            </button>
            <button class="button is-danger" @click="removeAll">
                Remove All
            </button>
            <hr>

            Unfinished Todos
            <ul>
                <li v-for="todo in unfinishedTodos">

                    <input v-if="todo.isEditing" type="text"
                           :value="todo.title" @input="updateTodo({todo, newTitle: $event.target.value})">

                    <span v-else>{{todo.title}}</span>

                    <button class="button is-primary" @click="toggleIsEditing(todo)">
                        Edit
                    </button>
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
        data: function () {
            return {
                newTodo: null,
            }
        },
        computed: {
            ...mapState({
                todos: state => state.todos.todos,
            }),
            ...mapGetters({
                finishedTodos: 'todos/finishedTodos',
                unfinishedTodos: 'todos/unfinishedTodos',
            })
        },
        methods: {
            ...mapMutations({
                addTodo: 'todos/ADD_TODO',
                removeTodo: 'todos/REMOVE_TODO',
                toggleTodo: 'todos/TOGGLE_TODO',
                removeAll: 'todos/REMOVE_ALL',
                toggleIsEditing: 'todos/TOGGLE_IS_EDITING',
                updateTodo: 'todos/UPDATE_TODO'

            }),
            fetch() {
                this.$store.dispatch('todos/fetchTodos');
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>