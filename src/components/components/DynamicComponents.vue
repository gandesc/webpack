<template>
    <div>
        <component :is="componentName" content="foo"></component>
    </div>
</template>

<script>
    import BulmaCard from '@/components/BulmaCard';
    import RenderAnimate from '@/components/RenderAnimate';
    export default {
        components: {BulmaCard, RenderAnimate},
        name: "dynamic-components",
        data: function () {
            return {
                componentName: 'RenderAnimate'
            }
        }
    }
</script>

<style scoped>

</style>