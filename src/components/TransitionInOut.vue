<template>
    <div>

        <transition name="card" mode="out-in">

            <bulma-card content="Card 1" v-if="toggle" key="1">a</bulma-card>
            <bulma-card content="Card 2" v-if="!toggle" key="2">b</bulma-card>

        </transition>

        <button @click="handleToggle">Toggle</button>

    </div>
</template>

<script>
    import BulmaCard from './BulmaCard';

    export default {
        components: { BulmaCard },
        name: "transition-in-out",
        data: function () {
            return {
                toggle: false
            }
        },
        methods: {
            handleToggle() {
                this.toggle = !this.toggle;
            }
        }
    }
</script>

<style scoped>
    .card-enter-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: zoomIn;
    }

    .card-leave-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: zoomOut;
    }

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
        animation-name: fadeIn;
    }

    .fade-leave-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeOut;
    }
</style>