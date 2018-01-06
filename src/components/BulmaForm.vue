<template>
    <form @submit.prevent="login">
        <div class="field">
            <label for="user.email" class="label">Email</label>
            <div class="control">
                <input id="user.email" type="email" class="input">
            </div>
            <p class="help">User email</p>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "BulmaForm",
        methods: {
            login() {
                console.log('hit submit');
            }
        }
    }
</script>

<style scoped>

</style>