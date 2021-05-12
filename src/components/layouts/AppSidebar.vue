<template>
  <aside class="sidebar" :class="{ toggle: $store.state.sidebar }">
    <div class="sidebar__portrait"></div>
    <app-links
      class="links--animate-left"
      :class="{ toggle: $store.state.sidebar }"
    />
  </aside>
</template>

<script>
import AppLinks from "../ui/AppLinks.vue";
export default {
  components: { AppLinks },
  name: "AppSidebar",
};
</script>

<style lang="scss" scoped></style>
