<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        :class="[
          currentPage.includes('sign-up') ? 'navigation__item--disabled' : '',
          'navigation__item',
        ]"
      >
        <router-link to="/sign-up" class="navigation__link">Sign Up</router-link>
      </li>
      <li
        :class="[
          currentPage.includes('features') ? 'navigation__item--disabled' : '',
          'navigation__item',
        ]"
      >
        <router-link to="/features" class="navigation__link">Our features</router-link>
      </li>
      <li
        :class="[
          currentPage.includes('help') ? 'navigation__item--disabled' : '',
          'navigation__item',
        ]"
      >
        <router-link to="/help" class="navigation__link">Help</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.path
    },
  },
}
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  max-width: 500px;
  padding: 15px 30px;

  &__list {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__link {
    color: $font-contrast;
    font-family: 'MullerLight', sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;

    &:hover,
    &:focus,
    &:active {
      font-weight: bold;
    }
  }

  &__item--disabled {
    display: none;
  }
}

@media (min-width: $tablet-width) {
  .navigation {
    max-width: none;
    padding: 43px 65px;

    &__list {
      justify-content: flex-end;
    }

    &__item {
      margin-right: 85px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
