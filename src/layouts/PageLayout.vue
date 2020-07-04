<template>
  <div class="page">
    <header class="page__header">
      <BaseLogo />
      <MainNavigation />
    </header>

    <main class="page__main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'
import BaseLogo from '@/components/BaseLogo.vue'

export default {
  name: 'PageLayout',
  components: {
    MainNavigation,
    BaseLogo,
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
    justify-content: center;
    flex-direction: column;
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

  &--help {
    background-image: url('../assets/images/help-bg-mobile.jpg');
  }

  &--features {
    background-image: url('../assets/images/features-bg-mobile.jpg');
  }

  &--home,
  &--not-found {
    background-image: url('../assets/images/home-bg-mobile.jpg');
  }
}

@media (min-width: $tablet-width) {
  .page {
    background-image: url('../assets/images/home-bg-tablet.jpg');

    &__header {
      justify-content: space-between;
      flex-direction: row;
      padding-left: 65px;
    }

    &--help {
      background-image: url('../assets/images/help-bg-tablet.jpg');
    }

    &--features {
      background-image: url('../assets/images/features-bg-tablet.jpg');
    }

    &--home,
    &--not-found {
      background-image: url('../assets/images/home-bg-tablet.jpg');
    }
  }
}

@media (min-width: $desktop-width) {
  .page {
    background-image: url('../assets/images/home-bg-desktop.jpg');

    &--help {
      background-image: url('../assets/images/help-bg-desktop.jpg');
    }

    &--features {
      background-image: url('../assets/images/features-bg-desktop.jpg');
    }

    &--home,
    &--not-found {
      background-image: url('../assets/images/home-bg-desktop.jpg');
    }
  }
}
</style>
