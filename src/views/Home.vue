<template>
  <PageLayout class="page--home home-page">
    <h1 class="home-page__heading">Home Page</h1>

    <p class="home-page__about" v-if="name && email">
      {{ name }}, congratulations! You have successfully registered. All additional information will
      be sent to {{ email }}.
    </p>
    <template v-else>
      <p class="home-page__about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure. Dolor assumenda
        delectus perspiciatis natus doloribus tempore, possimus ex facilis a error quas consequuntur
        eligendi saepe aperiam laborum inventore quisquam.
      </p>
      <router-link to="/sign-up" class="home-page__link">Sign Up</router-link>
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue'

export default {
  name: 'Home',
  components: {
    PageLayout,
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  created() {
    if (this.$route.query.name) {
      this.name = this.$route.query.name
    }

    if (this.$route.query.email) {
      this.email = this.$route.query.email
    }
  },
  watch: {
    $route(to) {
      this.name = to.query.name ? to.query.name : ''
      this.email = to.query.email ? to.query.email : ''
    },
  },
}
</script>

<style scoped lang="scss">
.home-page {
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
  .home-page {
    &__heading {
      max-width: 50%;
    }

    &__about {
      max-width: 50%;
    }
  }
}
</style>
