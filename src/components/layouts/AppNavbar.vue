<template>
  <nav
    class="navbar navbar--flex"
    :class="{ 'navbar--fixed': $store.state.sidebar }"
  >
    <router-link
      to="/"
      class="navbar__link"
      title="Home"
      v-show="!$store.state.sidebar"
      ><img
        :src="require('@/assets/max.png')"
        alt="logo image"
        class="navbar__logo"
    /></router-link>
    <div
      class="navbar__hamburger"
      @click="$store.commit('TOGGLE_SIDEBAR')"
      :class="{ toggle: $store.state.sidebar }"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
 
  </nav>
</template>

<script>

export default {

  name: "AppNavbar",
  
};
</script>
