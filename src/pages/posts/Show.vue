<template>
    <div class="card">
        <div class="card-contents">
            <h4>Post</h4>
            <pre v-if="post">{{post.title}}</pre>
        </div>
        <div class="card-footer">
            <router-link :to="{name:'posts.index'}">
                Go Back
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "show",
        props: {
            id: {
                type: [Number, String],
                required: true,
            },
        },
        data: function () {
            return {
                post: null,
            }
        },
        watch: {
            //id: 'loadPost'
        },
        methods: {
            loadPost() {
                axios.get('posts/'+this.id).then(({data}) => {
                    this.post = data;
                }).catch(error => {
                    console.log('loadPost: ',error);
                });
            }
        },
        created() {
            this.loadPost();
        }
    }
</script>

<style scoped>

</style>