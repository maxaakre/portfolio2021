<template>
  <article class="article about">
    <div class="about__image"></div>
    <div class="about__information">
      <h1 class="about__title">Max Aakre</h1>
      <p class="about__description">
        I am a Junior frontend devoloper who is currently taking my degree in Web
        Development at Jensen University.
      </p>
      <div id="Contact" class="about__contact">
        <ul class="social__links">
          <li class="mr-20">
            <a href="https://www.linkedin.com/in/maxaakre/"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/maxaakre"
              ><i class="fab fa-github"></i
            ></a>
          </li>
        </ul>
        <ul class="about__contact-list">
          <li>
            <a class="footer__sub-title__a" href="mailto:maxaakre@gmail.com"><span>Email: maxaakre@gmail.com</span></a>
          </li>
          <li>
            <span>Phone: +46 76 809 53 43</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
