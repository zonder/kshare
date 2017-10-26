<template>
  <div id="app">
    <app-header></app-header>
    <section class="main-section section"></section>
    <app-footer></app-footer>
    </div>
</template>
 
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import '~bulma'
</style>