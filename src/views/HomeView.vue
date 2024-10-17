<template>
    <div class="app-container">
        <header class="header-home">
            <nav class="navbar-home">
                <ul>
                    <img id="imgLogo" alt="Vue logo" src="@/assets/logo.png">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/services">Serviços</a></li>
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </nav>
        </header>
        <main class="main-content">
            <aside class="sidebar-home">
                <IconsComponent />
            </aside>
        </main>
    </div>
</template>

<script>
    import IconsComponent from '@/components/IconsComponent.vue';

    export default {
        name: 'HomeView',
        components: {
            IconsComponent,
        }
    }
</script>
