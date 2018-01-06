<template>
    <div class="card">
        <div class="card-content">
            <div class="field">
                <label for="post.id" class="label"></label>
                <div class="control">
                    <input id="post.id" type="text" class="input" v-model="post.id">
                </div>
            </div>

            <pre>
                {{requestResponse}}
            </pre>

            <div class="field">
                <div class="control">
                    <button class="button is-link" @click="getPostById">Get</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import debounce from 'lodash/debounce';
    export default {
        name: "request-by-id",
        data: function () {
            return {
                post: {},
                requestResponse: null
            }
        },
        methods: {
            getPostById: debounce(function () {
                axios.get('posts/'+this.post.id).then(({data}) => {
                    this.requestResponse = data;
                }).catch(error => {
                    console.log('getPostById: ',error);
                });
            }, 1500),
        }
    }
</script>

<style scoped>

</style>