<template>
  <article class="article portfolio">
    <div class="portfolio__image"></div>
    <div class="portfolio__information">
      <h1 class="portfolio__title">Ascaro Padel</h1>
      <p class="portfolio__description">
        This is a homepage for a Padel location in the center of Stockholm
      </p>
      <a
        class="portfolio__description__a"
        href="https://ascaropadel.com/"
        target="_blank"
        >https://ascaropadel.com/</a
      >
      <ul class="portfolio__list">
        <li class="portfolio__inner-item logo">
          <i class="fab fa-php"></i>
        </li>
        <li class="portfolio__inner-item logo">
          <i class="fab fa-wordpress"></i>
        </li>
        <li class="portfolio__inner-item">Tailwind css</li>
      </ul>
    </div>
    <div class="portfolio__information">
      <h1 class="portfolio__title">
        Other websites
      </h1>
      <div class="portfolio__websites">
        <a
          class="portfolio__description__a"
          href="https://palmansmaleri.herokuapp.com/"
          target="_blank"
          >https://palmansmaleri.herokuapp.com/</a
        >
        <a
          class="portfolio__description__a"
          href="https://arsberattelse2020.axeljohnson.se/"
          target="_blank"
          >https://arsberattelse2020.axeljohnson.se/</a
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style></style>
