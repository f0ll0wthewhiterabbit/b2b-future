<template>
  <Page class="page--features features-page">
    <h1 class="features-page__heading">Features Page</h1>
    <p class="features-page__about">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at fugit non debitis
      corrupti architecto dolorem, error deserunt. Cupiditate praesentium quidem unde rerum.
      Consequatur, dolore minima placeat, maiores voluptatum, unde eligendi velit in illum illo
      quibusdam sit. Eaque officia, provident ipsa necessitatibus alias corrupti in harum excepturi
      repudiandae numquam culpa itaque possimus enim facere vel inventore non est cum, delectus
      accusantium nulla labore ea autem. Nesciunt hic pariatur quia libero.
    </p>
  </Page>
</template>

<script>
import Page from '@/layouts/Page.vue'

export default {
  components: {
    Page,
  },
}
</script>

<style scoped lang="scss">
.features-page {
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
  .features-page {
    &__heading {
      max-width: 50%;
    }

    &__about {
      max-width: 50%;
    }
  }
}
</style>
