<template>
    <div class="app-container">
        <header class="header-home">
            <nav class="navbar-home">
                <ul>
                    <img id="imgLogo" alt="Vue logo" src="@/assets/logo.png">
                    <li style="margin-left: 7rem;"><router-link to="/profile">Perfil</router-link></li>
                    <li><router-link to="/indicators">Indicadores</router-link></li>
                    <li><router-link to="/about">Sobre</router-link></li>
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
