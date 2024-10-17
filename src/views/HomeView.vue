<template>
    <div class="app-container">
        <header class="header-home">
            <nav class="navbar-home">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
        <main class="main-content">
            <aside class="sidebar-home">
                <IconsComponent />
            </aside>
            <section class="content-home">
                <TasksComponent />
                <StatisticsComponent />
                <MessagesComponent />
            </section>
        </main>
        <footer class="footer-home">
            <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<script>
    import IconsComponent from '@/components/IconsComponent.vue'
    import TasksComponent from '@/components/TasksComponent.vue'
    import StatisticsComponent from '@/components/StatisticsComponent.vue'
    import MessagesComponent from '@/components/MessagesComponent.vue'

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
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header-home {
    background-color: #333;
    color: white;
    padding: 1rem;
}

.navbar-home ul {
    display: flex;
    list-style: none;
    padding: 0;
}

.navbar-home li {
    margin-right: 1rem;
}

.navbar-home a {
    color: white;
    text-decoration: none;
}

.main-content {
    display: flex;
    flex: 1;
    padding: 1rem;
}

.sidebar-home {
    width: 20%;
    padding: 1rem;
    background-color: #f4f4f4;
}

.content-home {
    flex: 1;
    padding: 1rem;
}

.footer-home {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
}
</style>
