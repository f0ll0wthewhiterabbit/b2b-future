<template>
  <aside class="registration">
    <h1 class="registration__title">Register as vendor</h1>
    <p class="registration__instruction">Please submit your registration details below</p>

    <TheSignUpForm />

    <router-link to="/" class="registration__link">Back to home</router-link>
  </aside>
</template>

<script>
import TheSignUpForm from '@/components/TheSignUpForm.vue'

export default {
  name: 'TheRegistration',
  components: {
    TheSignUpForm,
  },
}
</script>

<style scoped lang="scss">
.registration {
  padding: 30px 25px;
  text-align: center;
  background-color: $white;

  &__title {
    margin: 0 0 3px;
    font-family: 'Muller', sans-serif;
    font-size: 26px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;
  }

  &__instruction {
    margin: 0 0 40px;
    font-family: 'Muller', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;
  }

  &__link {
    transition: color 0.3s ease;
    color: $font-blue;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;

    &:hover,
    &:focus,
    &:active {
      color: $accent;
    }
  }
}

@media (min-width: $tablet-width) {
  .registration {
    width: 40%;
    min-height: 100vh;
    padding: 44px 30px;

    &__title {
      font-size: 28px;
    }

    &__instruction {
      margin-bottom: 51px;
    }

    &__link {
      font-size: 18px;
    }
  }
}

@media (min-width: $desktop-width) {
  .registration {
    width: $aside-width;

    &__title {
      font-size: 30px;
    }
  }
}
</style>
