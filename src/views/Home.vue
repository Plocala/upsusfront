<template>
    <div class="content">
        <icons></icons>
        <tasks></tasks>
        <statistics></statistics>
        <messages></messages>
    </div>
</template>

<script>
    import Icons from '../components/Icons.vue'
    import Tasks from '../components/Tasks.vue'
    import Statistics from '../components/Statistics.vue'
    import Messages from '../components/Messages.vue'

    export default {
        name: 'Home',
        components: {
                Icons,
                Tasks,
                Statistics,
                Messages
        }
    }
</script>

<style scoped>
    .content {
    padding: 20px;
    }
</style>
