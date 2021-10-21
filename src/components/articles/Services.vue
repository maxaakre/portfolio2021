<template>
  <article class="article services">
    <app-title
      title="What I Do"
      subTitle="My Services"
      modifyClass="app-title--center app-title--font-medium"
    />

    <ul class="services__list">
      <li class="services__item title" data-aos="fade-up" data-aos-delay="50">
        Backend Technologies
        <ul class="services__inner-list">
          <li class="services__inner-item logo">
            <i class="fab fa-node-js"></i>
          </li>
          <li class="services__inner-item">NodeJS</li>
          <li class="services__inner-item">ExpressJS</li>
          <li class="services__inner-item">MongoDB</li>
          <li class="services__inner-item">NeDB</li>
        </ul>
      </li>
      <li class="services__item title" data-aos="fade-up" data-aos-delay="100">
        Styling Libraries
        <ul class="services__inner-list">
          <li class="services__inner-item logo"><i class="fab fa-css3"></i></li>
          <li class="services__inner-item">CSS3</li>
          <li class="services__inner-item">SASS/SCSS</li>
          <li class="services__inner-item">Tailwind</li>
        </ul>
      </li>
      <li class="services__item title" data-aos="fade-up" data-aos-delay="150">
        SPA Frameworks
        <ul class="services__inner-list">
          <li class="services__inner-item logo">
            <i class="fas fa-rocket"></i>
          </li>
          <li class="services__inner-item">VueJS</li>
          <li class="services__inner-item">React</li>
          <li class="services__inner-item">Wordpress</li>
          <li class="services__inner-item">Contentful</li>
          <li class="services__inner-item">PHP</li>
        </ul>
      </li>
    </ul>
  </article>
</template>

<script>
import AppTitle from "../ui/AppTitle.vue";
export default {
  name: "Services",
  components: { AppTitle },
};
</script>
