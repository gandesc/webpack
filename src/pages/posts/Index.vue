<template>
    <div class="card">
        <div class="card-contents">
            <h3>Posts</h3>
            <ul class="menu-list">
                <li v-for="post in posts">
                    <router-link
                        :key="post.id"
                        :to="{ name: 'posts.show', params: {id: post.id} }">
                        {{post.id}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="card-footer">
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data: function () {
            return {
                posts: []
            };
        },
        methods: {
            loadPosts() {
                axios.get('/posts').then(({data}) => {
                    this.posts = data;
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        created() {
            this.loadPosts();
        }
    }
</script>

<style scoped>

</style>