<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
  import NavbarComponent from '../components/NavbarComponent.vue'
  import FooterComponent from '../components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent
    }
  }
</script>

<style>
  body {
    font-family: Arial, sans-serif;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
