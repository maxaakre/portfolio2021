<template>
  <div class="wrapper">
    <ul class="links">
      <li
        class="links__item"
        v-for="link in links"
        :key="link.label"
        @click="closeSidebar"
      >
        <router-link
          class="links__nav-link"
          v-if="!link.scrollTo"
          :to="{ name: link.name }"
          >{{ link.label }}</router-link
        >
        <a
          v-else
          v-scroll-to="{ el: '#' + link.scrollTo }"
          class="links__nav-link"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";
export default {
  name: "AppLinks",
  setup() {
    const links = ref([
      {
        name: "Portfolio",
        label: "Portfolio",
        scrollTo: "Portfolio",
      },
      {
        name: "Home",
        label: "About",
        scrollTo: "About",
      },
      {
        name: "Home",
        label: "Services",
        scrollTo: "Services",
      },
      {
        name: "Home",
        label: "Contact",
        scrollTo: "Contact",
      },
    ]);

    const closeSidebar = () => {
      if (store.state.sidebar) store.commit("TOGGLE_SIDEBAR");
    };

    return {
      links,
      closeSidebar,
    };
  },
};
</script>
