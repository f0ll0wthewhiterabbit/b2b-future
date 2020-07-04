<template>
  <PageLayout class="page--help help-page">
    <h1 class="help-page__heading">Help Page</h1>
    <p class="help-page__about">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ex exercitationem rem eos
      facere? Laudantium blanditiis nisi fuga vel voluptate facere saepe molestias, cumque quasi
      mollitia architecto, dolorem et expedita.
    </p>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue'

export default {
  name: 'Help',
  components: {
    PageLayout,
  },
}
</script>

<style scoped lang="scss">
.help-page {
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
  .help-page {
    &__heading {
      max-width: 50%;
    }

    &__about {
      max-width: 50%;
    }
  }
}
</style>
