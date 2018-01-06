<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Accounts
            </p>
        </header>
        <div class="card-contents">
            <br>
            <router-link :to="{name: 'accounts.information'}">Information</router-link> |
            <router-link :to="{name: 'accounts.following'}">Following</router-link> |
            <router-link :to="{name: 'accounts.posts'}">Posts</router-link>

            <hr>

            <router-view></router-view>

        </div>
        <div class="card-footer">
            <router-link :to="{name:'home'}">Home</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "accounts"
    }
</script>

<style scoped>

</style>