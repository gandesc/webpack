<template>
    <div class="card">
        <div class="card-content">
            <slot name="content">
                <div v-if="!hasSlot('content')">
                    Default content, no slot given
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slot-checking",
        methods: {
            hasSlot(name='default') {
                return !!this.$slots[name];
            }
        }
    }
</script>

<style scoped>

</style>