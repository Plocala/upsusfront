<template>
    <div class="contentView">
        <IconsComponent />
        <TasksComponent />
        <StatisticsComponent />
        <MessagesComponent />
    </div>
</template>

<script>
    import IconsComponent from './components/IconsComponent.vue'
    import TasksComponent from './components/TasksComponent.vue'
    import StatisticsComponent from './components/StatisticsComponent.vue'
    import MessagesComponent from './components/MessagesComponent.vue'

    export default {
        name: 'HomeView',
        components: {
            IconsComponent,
            TasksComponent,
            StatisticsComponent,
            MessagesComponent
        }
    }
</script>

<style scoped>
    .contentView {
        padding: 20px;
    }
</style>
