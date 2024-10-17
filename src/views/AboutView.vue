<template>
    <div class="about-container">
        <header class="header-about">
            <h1>Sobre a Instituição</h1>
        </header>
        <main class="main-about-content">
            <section class="about-section">
                <h2>Missão</h2>
                <p>A nossa missão é [Descrição da Missão].</p>
            </section>
            <section class="about-section">
                <h2>Visão</h2>
                <p>Visamos [Descrição da Visão].</p>
            </section>
            <section class="about-section">
                <h2>Valores</h2>
                <ul>
                    <li>Valor 1</li>
                    <li>Valor 2</li>
                    <li>Valor 3</li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'AboutView',
    }
</script>

<style scoped>
    .about-container {
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    .header-about {
        text-align: center;
        margin-bottom: 20px;
    }
    .main-about-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .about-section {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
    }
</style>
