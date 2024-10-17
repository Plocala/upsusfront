<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <footer></footer>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
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
