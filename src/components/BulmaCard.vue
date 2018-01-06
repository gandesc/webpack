<template>
    <div class="card">
        <div class="card-content">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "bulma-card",
        props: {
            content: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>