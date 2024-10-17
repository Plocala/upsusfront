<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      FooterComponent
    }
  }
</script>
