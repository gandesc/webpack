export default {
    finishedTodos: state => state.todos.filter( todo => todo.completed ),
    unfinishedTodos: state => state.todos.filter( todo => !todo.completed ),
}