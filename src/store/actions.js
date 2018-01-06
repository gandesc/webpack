export default {
    fetchTodos(context) {
        axios.get('todos')
            .then(({data}) => {
                context.commit('fetchTodos', data);
            })
            .catch(() => {
                console.log('Something went wrong');
            });
    }
}