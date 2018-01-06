<template>
    <div class="card">
        <div class="card-content">
            This is Home
        </div>
        <div class="card-footer">
            <router-link :to="{name:'contact'}">Contact</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>