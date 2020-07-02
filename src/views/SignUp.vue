<template>
  <div class="sign-up-page">
    <div class="sign-up-page__container">
      <Company />

      <Registration />
    </div>
  </div>
</template>

<script>
import Registration from '@/components/Registration.vue'
import Company from '@/components/Company.vue'

export default {
  components: {
    Registration,
    Company,
  },
}
</script>

<style scoped lang="scss">
.sign-up-page {
  position: relative;

  min-width: 320px;

  color: $font-dark;
  background-color: $accent;

  font-family: 'Muller', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.2;
}

@media (min-width: $tablet-width) {
  .sign-up-page {
    &__container {
      display: flex;

      align-items: stretch;
      justify-content: flex-end;
    }
  }
}
</style>
