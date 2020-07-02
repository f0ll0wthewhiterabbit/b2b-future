<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link to="/features" class="navigation__link">Our features</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/help" class="navigation__link">Help</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  padding: 15px 30px;
  width: 100%;
  max-width: 500px;

  &__list {
    display: flex;

    margin: 0;
    padding: 0;

    list-style: none;

    justify-content: space-around;
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
}

@media (min-width: $tablet-width) {
  .navigation {
    padding: 43px 65px;
    max-width: none;

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
