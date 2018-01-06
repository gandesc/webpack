<template>

    <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
            <div class="box">

                    <form @submit.prevent="login">
                        <div class="field">
                            <label for="user.email" class="label">Email</label>
                            <div class="control">
                                <input type="text" class="input" id="user.email"
                                       v-model="user.email">
                            </div>
                        </div>

                        <div class="field">
                            <label for="user.password" class="label">Password</label>
                            <div class="control">
                                <input type="text" class="input" id="user.password"
                                       v-model="user.password">
                            </div>
                        </div>

                        <a class="button is-block is-info is-large" @click="login">
                            Login
                        </a>
                    </form>
            </div>
        </div>
    </div>


</template>

<script>
    import state from '@/state/index';

    export default {
        name: "login",
        data: function () {
            return {
                user: {
                    email: null,
                    password: null
                },
                state
            }
        },
        methods: {
            login() {
                this.state.isLoggedIn = true;
                localStorage.setItem('isLoggedIn', '1');

                this.$router.push({name: 'home'});
            }
        }
    }
</script>

<style scoped>

</style>