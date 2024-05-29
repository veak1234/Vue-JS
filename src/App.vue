<template>
  <NavbarVue />
  <div class="container">
    <div class="mb-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue';

export default {
  components: {
    NavbarVue
  },
};
</script>

<style>
nav {
  padding: 15px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
