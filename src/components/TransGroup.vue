<template>
    <transition-group name="fade">
        <bulma-card
            v-for="item in list"
            :content="item+''"
            :key="item">

        </bulma-card>
    </transition-group>
</template>

<script>
    import BulmaCard from './BulmaCard';
    export default {
        components: {BulmaCard},
        name: "trans-group",
        data: function () {
            return {
                list: [1,2,3]
            }
        }
    }
</script>

<style scoped>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fade-enter-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: jello;
    }

    .fade-leave-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: zoomOut;
    }
</style>