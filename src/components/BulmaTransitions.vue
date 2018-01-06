<template>
    <div class="card">
        <transition name="fade">
            <div class="card-content" v-if="isContentVisible">
                foo
            </div>
        </transition>
        <div class="card-footer">
            <i class="fa fa-car" @click="toggleContent"></i>
        </div>

    </div>

</template>

<script>
    export default {
        name: "bulma-transitions",
        data: function () {
            return {
                isContentVisible: true,
            }
        },
        methods: {
            toggleContent() {
                this.isContentVisible = !this.isContentVisible;
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
        animation-name: fadeIn;
    }

    .fade-leave-active {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeOut;
    }
</style>