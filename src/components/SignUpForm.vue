<template>
  <form class="sign-up-form" autocomplete="off">
    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__country">Country</label>
      <select class="sign-up-form__select" id="sign-up-form__country" name="select">
        <option value disabled selected></option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__name">First name</label>
      <input class="sign-up-form__input" id="sign-up-form__name" type="text" name="name" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__surname">Last name</label>
      <input class="sign-up-form__input" id="sign-up-form__surname" type="text" name="surname" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__company">Company name</label>
      <input class="sign-up-form__input" id="sign-up-form__company" type="text" name="company" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__address">Address</label>
      <input class="sign-up-form__input" id="sign-up-form__address" type="text" name="address" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__brands">Top 3 brands</label>
      <input class="sign-up-form__input" id="sign-up-form__brands" type="text" name="brands" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__phone">Telephone</label>
      <input
        class="sign-up-form__input sign-up-form__input--confirmed"
        id="sign-up-form__phone"
        type="tel"
        name="phone"
        value="+375 29 815 00 50"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__email">Email address</label>
      <input class="sign-up-form__input" id="sign-up-form__email" type="email" name="email" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label class="sign-up-form__label" for="sign-up-form__email-confirm">Confirm Email address</label>
      <input class="sign-up-form__input" id="sign-up-form__email-confirm" type="email" />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <input
        class="sign-up-form__checkbox visually-hidden"
        id="sign-up-form__agreement"
        type="checkbox"
        name="agreement"
      />
      <label class="sign-up-form__checkbox-label" for="sign-up-form__agreement">Accept agreement</label>
    </fieldset>

    <button class="sign-up-form__submit">Register</button>
  </form>
</template>

<style scoped lang="scss">
.sign-up-form {
  &__field {
    margin: 0 0 30px;
    padding: 0;
    text-align: left;
    border: none;

    &:first-of-type {
      margin-bottom: 30px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  &__label {
    display: block;
    color: $font-light;
    font-family: 'MullerLight', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;
  }

  &__select,
  &__input {
    width: 100%;
    padding: 4px 0 1px;
    transition: border-color 0.3s linear;
    border: none;
    border: 0;
    border-bottom: 2px solid $light-grey;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;

    &:active,
    &:focus,
    &:hover {
      border-bottom-color: transparent;
    }
  }

  &__input {
    background-image: linear-gradient(to right, #23a5fc 0, #40f9fe 100%);
    background-repeat: no-repeat;
    background-position: center bottom -3px;
    background-size: 100% 2px;

    &--confirmed {
      border-bottom-color: transparent;
      background-image: linear-gradient(to right, #23a5fc 0, #40f9fe 100%),
        url('../assets/images/icons/confirm.svg');
      background-repeat: no-repeat, no-repeat;
      background-position: center bottom -3px, center right 8px;
      background-size: 100% 2px, 12px, 9px;
    }

    &::-ms-clear {
      display: none;
    }
  }

  &__select {
    padding-right: 44px;
    cursor: pointer;
    background-image: linear-gradient(to right, #23a5fc 0, #40f9fe 100%),
      url('../assets/images/icons/angle-down.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: center bottom -3px, center right 16px;
    background-size: 100% 2px, 15px 8px;

    appearance: none;

    &::-ms-expand {
      display: none;
    }
  }

  &__checkbox-label {
    position: relative;
    display: block;
    display: flex;
    align-items: center;
    min-height: 20px;
    padding-left: 37px;
    transition: all 0.3s ease;
    color: $font-light;
    font-family: 'MullerLight', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.2;

    &::before {
      position: absolute;
      top: -1px;
      left: 0;
      width: 20px;
      height: 20px;
      content: '';
      transition: all 0.3s ease;
      border: 1px solid $font-light;
      background-color: $white;
    }

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;

      &::before {
        border-color: $accent;
      }
    }
  }

  &__checkbox:checked + .sign-up-form__checkbox-label::after {
    position: absolute;
    top: 5px;
    left: 5px;
    display: block;
    width: 12px;
    height: 9px;
    content: '';
    background-color: $white;

    mask-image: url('../assets/images/icons/confirm.svg');
    mask-position: center;
    mask-repeat: no-repeat;
  }

  &__checkbox:checked + .sign-up-form__checkbox-label::before {
    border-color: $accent;
    background-color: $accent;
  }

  &__checkbox:focus + .sign-up-form__checkbox-label,
  &__checkbox:hover + .sign-up-form__checkbox-label {
    color: $accent;
  }

  &__checkbox:focus + .sign-up-form__checkbox-label::before {
    color: $accent;
    border-color: $accent;
  }

  &__submit {
    margin-bottom: 18px;
    padding: 14px 60px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    color: $font-contrast;
    border: none;
    border-radius: 6px;
    background-color: $accent;
    font-family: 'Muller', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.2;

    &:hover,
    &:focus,
    &:active {
      background-color: $accent-light;
    }
  }
}

@media (min-width: $tablet-width) {
  .sign-up-form {
    &__field {
      margin-bottom: 40px;

      &:first-of-type {
        margin-bottom: 50px;
      }

      &:last-of-type {
        margin-bottom: 43px;
      }
    }

    &__checkbox-label {
      font-size: 16px;
    }

    &__submit {
      padding: 16px 80px;
    }
  }
}
</style>
