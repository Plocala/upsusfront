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
                <StatisticsComponent />
            </section>
        </main>
    </div>
</template>

<script>
    import IconsComponent from '@/components/IconsComponent.vue'
    import StatisticsComponent from '@/components/StatisticsComponent.vue'

    export default {
        name: 'HomeView',
        components: {
            IconsComponent,
            StatisticsComponent,
        }
    }
</script>
