<template>
  <div class="container container--bg-wallpaper-dark">
    <app-navbar />
    <app-sidebar />
    <div class="container__content container__content--flex">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./components/layouts/AppFooter.vue";
import AppNavbar from "./components/layouts/AppNavbar.vue";
import AppSidebar from "./components/layouts/AppSidebar.vue";
export default {
  components: { AppNavbar, AppSidebar, AppFooter },
  name: "App",
};
</script>
