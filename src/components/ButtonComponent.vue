<template>
    <button @click="emitEvent">Clique-me</button>
</template>

<script>
    export default {
        methods: {
            emitEvent() {
                this.$emit('meu-evento', 'dados do evento');
            }
        }
    }
</script>