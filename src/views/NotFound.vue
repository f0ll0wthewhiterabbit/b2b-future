<template>
  <PageLayout class="page--not-found not-found-page">
    <h1 class="not-found-page__heading">404</h1>
    <p class="not-found-page__about">Page Not Found</p>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue'

export default {
  name: 'NotFound',
  components: {
    PageLayout,
  },
}
</script>

<style scoped lang="scss">
.not-found-page {
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
  .not-found-page {
    &__heading {
      max-width: 50%;
    }

    &__about {
      max-width: 50%;
    }
  }
}
</style>
