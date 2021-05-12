<template>
  <div class="app-title" :class="modifyClass">
    <h1 class="container__title container__title--letter-spacing">
      {{ title }}
    </h1>
    <span
      class="container__sub-title container__sub-title--size-lg container__sub-title--letter-spacing"
    >
      {{ subTitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    title: String,
    subTitle: {
      type: String,
      default: null,
    },
    modifyClass: {
      type: String,
      default: null,
    },
  },
};
</script>
