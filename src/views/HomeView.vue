<template>
    <div class="app-container">
        <header class="header-home">
            <nav class="navbar-home">
                <ul>
                    <img id="imgLogo" alt="Vue logo" src="@/assets/logo.png">
                    <li style="margin-left: 7rem;"><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
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
