<template>
  <div class="container__content-header container__content-header--flex">
    <app-title title="Welcome!" subTitle="I'm Max Aakre." />
  </div>
</template>

<script>
import AppTitle from "../ui/AppTitle.vue";
export default {
  components: { AppTitle },
  name: "AppHeader",
  setup() {
    // onMounted(() => {
    //   setInterval(() => {
    //     setDisplayText();
    //   }, 3000);
    // });
    // const setDisplayText = () => {
    //   if (titleText.value === "Welcome!") {
    //     titleText.value = "Stockholm, Sweden!";
    //     subText.value = "Where I work as a fullstack - web developer.";
    //   } else {
    //     titleText.value = "Welcome!";
    //     subText.value = "I'm Aleksander Dimitrijevic.";
    //   }
    // };
  },
};
</script>
