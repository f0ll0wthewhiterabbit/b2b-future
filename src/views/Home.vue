<template>
  <div class="page">
    <header class="page__header">
      <Logo />
      <Navigation />
    </header>

    <main class="page__main">
      <h1 class="page__heading">Home Page</h1>
      <p class="page__about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure. Dolor assumenda
        delectus perspiciatis natus doloribus tempore, possimus ex facilis a error quas consequuntur
        eligendi saepe aperiam laborum inventore quisquam.
      </p>
      <router-link to="/sign-up" class="page__link">Sign Up</router-link>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Navigation,
    Logo,
  },
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background-color: $accent;
  background-image: url('../assets/images/home-bg-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 65px;
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1110px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    color: $font-contrast;
  }

  &__heading {
    max-width: 50%;
    font-family: 'Muller', sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;
  }

  &__about {
    max-width: 50%;
    margin-bottom: 30px;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;
  }

  &__link {
    padding: 14px 60px;
    transition: background-color 0.3s ease;
    text-align: center;
    text-decoration: none;
    color: $font-contrast;
    border-radius: 6px;
    background-color: $contrast;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;

    &:hover,
    &:focus,
    &:active {
      background-color: $contrast-light;
    }
  }
}

@media (min-width: $tablet-width) {
  .page {
    background-image: url('../assets/images/home-bg-tablet.jpg');
  }
}

@media (min-width: $desktop-width) {
  .page {
    background-image: url('../assets/images/home-bg-desktop.jpg');
  }
}
</style>
