<template>
    <div class="card">
        <div class="card-contents">
            <button @click="getPosts">Get Posts</button>
        </div>

        <pre v-if="ajaxResponse">
            {{ajaxResponse}}
        </pre>

    </div>
</template>

<script>
    export default {
        name: "request-on-click",
        data: function () {
            return {
                ajaxResponse: null,
            }
        },
        methods: {
            getPosts() {
                axios.get('/posts/1').then(({data}) => {
                    this.ajaxResponse = data;
                }).catch(error => {
                   console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>