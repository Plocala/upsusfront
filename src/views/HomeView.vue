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
            <div>
                <h1>Pacientes</h1>
                <ul>
                    <li v-for="paciente in pacientes" :key="paciente.id">{{ paciente.nome }}</li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    import IconsComponent from '@/components/IconsComponent.vue';

    export default {
        name: 'HomeView',
        components: {
            IconsComponent,
        },
        Data() {
            return {
                pacientes: [],
            }
        },
        mounted() {
            this.buscarPacientes();
        },
        methods: {
            async buscarPacientes() {
                try {
                    const resposta = await axios.get('http://localhost:8080/api/pacientes');
                    this.pacientes = resposta.data;
                } catch (erro) {
                    console.error('Error ao buscar pacientes', erro);
                }
            },
        },
    };
</script>
