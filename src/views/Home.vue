<template>
  <div class="home">
    <app-header data-aos="fade-in" />
    <about-me data-aos="fade-up" id="About" />
    <Portfolio data-aos="fade-up" id="Portfolio" />
    <Services data-aos="fade-up" id="Services" />
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader.vue";
import Portfolio from "@/components/articles/Portfolio.vue";
import AboutMe from "@/components/articles/AboutMe";
import Services from "@/components/articles/Services";
export default {
  components: { AppHeader, Portfolio, AboutMe, Services },
  name: "Home",
  title: "Max Aakre | Home",
  setup() {},
};
</script>
