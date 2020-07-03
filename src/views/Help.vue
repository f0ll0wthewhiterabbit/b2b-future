<template>
  <div class="page">
    <header class="page__header">
      <Logo />
      <Navigation />
    </header>

    <main class="page__main">
      <h1 class="page__heading">Help Page</h1>
      <p class="page__about">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ex exercitationem rem eos
        facere? Laudantium blanditiis nisi fuga vel voluptate facere saepe molestias, cumque quasi
        mollitia architecto, dolorem et expedita.
      </p>
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
  background-image: url('../assets/images/help-bg-mobile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
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
    font-family: 'Muller', sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;
  }

  &__about {
    margin-bottom: 30px;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;
  }
}

@media (min-width: $tablet-width) {
  .page {
    padding-left: 65px;
    background-image: url('../assets/images/help-bg-tablet.jpg');

    &__header {
      justify-content: space-between;
      flex-direction: row;
      padding-top: 0;
    }

    &__heading {
      max-width: 50%;
    }

    &__about {
      max-width: 50%;
    }
  }
}

@media (min-width: $desktop-width) {
  .page {
    background-image: url('../assets/images/help-bg-desktop.jpg');
  }
}
</style>
