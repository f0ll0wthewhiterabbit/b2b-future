<template>
  <section class="company">
    <h2 class="visually-hidden">Our company</h2>
    <header class="company__header">
      <MainNavigation />
    </header>

    <BaseLogo class="company__logo" />
  </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'
import BaseLogo from '@/components/BaseLogo.vue'

export default {
  name: 'TheCompany',
  components: {
    MainNavigation,
    BaseLogo,
  },
}
</script>

<style scoped lang="scss">
.company {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 150px; // Fixes IE11 vertical alignment bug
  min-height: 30vh;
  background-color: $accent;
  background-image: url('../assets/images/sign-up-bg-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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
    background-image: url('../assets/images/sign-up-bg-tablet.jpg');

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
    background-image: url('../assets/images/sign-up-bg-desktop.jpg');
  }
}
</style>
