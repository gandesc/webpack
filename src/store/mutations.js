export default {
    fetchTodos(state, todos) {
        state.todos = todos;
    },
    ADD_TODO(state, todoTitle) {
        lastTodo = state.todos[state.todos.length-1];

        state.todos.push({
            title: todoTitle,
            completed: false,
            id: lastTodo ? lastTodo.id + 1 : 1
        });
    },
    REMOVE_TODO(state, todo) {
        const index = state.todos.findIndex(element => element.id === todo.id);

        state.todos.splice(index, 1);
    },
    TOGGLE_TODO(state, todo) {
        const found = state.todos.find(element => element.id === todo.id);
        found.completed = !found.completed;
    }
}