<template>
  <section class="company">
    <h2 class="visually-hidden">Our company</h2>
    <header class="company__header">
      <Navigation />
    </header>

    <Logo class="company__logo" />
  </section>
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
.company {
  position: relative;

  display: flex;
  flex-direction: column;

  height: 150px; // Fixes IE11 vertical alignment bug
  min-height: 30vh;

  background-color: $accent;
  background-image: url('../assets/images/background-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  justify-content: center;

  &__header {
    display: flex;

    justify-content: center;
    order: 2;
  }

  &__logo {
    display: flex;

    justify-content: center;
    order: 1;

    svg {
      width: 70%;
    }
  }
}

@media (min-width: $tablet-width) {
  .company {
    display: block;

    width: 60%;
    height: auto;
    min-height: 100vh;

    background-image: url('../assets/images/background-tablet.jpg');

    &__header {
      justify-content: flex-end;
    }

    &__logo {
      position: absolute;
      top: calc(100vh / 2);
      left: 50%;

      display: block;

      transform: translate(-50%, -50%);

      svg {
        width: 100%;
      }
    }
  }
}

@media (min-width: $desktop-width) {
  .company {
    width: calc(100% - #{$aside-width});

    background-image: url('../assets/images/background-desktop.jpg');
  }
}
</style>
