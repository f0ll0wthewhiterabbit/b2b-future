<template>
  <form class="sign-up-form" autocomplete="off" @submit.prevent="handleSubmit">
    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('country')" for="sign-up-form__country">
        Country
        <span v-if="$v.country.$dirty && !$v.country.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
      </label>
      <select
        :class="[
          'sign-up-form__select',
          {
            'sign-up-form__select--warning': $v.country.$error,
            'sign-up-form__select--confirmed': !$v.country.$invalid,
          },
        ]"
        id="sign-up-form__country"
        name="select"
        v-model="country"
      >
        <option value disabled selected></option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('name')" for="sign-up-form__name">
        First name
        <span v-if="$v.name.$dirty && !$v.name.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
      </label>

      <input
        :class="getClassForInput('name')"
        id="sign-up-form__name"
        type="text"
        name="name"
        v-model.trim="name"
        @blur="$v.name.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('surname')" for="sign-up-form__surname">
        Last name
        <span v-if="$v.surname.$dirty && !$v.surname.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
      </label>
      <input
        :class="getClassForInput('surname')"
        id="sign-up-form__surname"
        type="text"
        name="surname"
        v-model.trim="surname"
        @blur="$v.surname.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('company')" for="sign-up-form__company">
        Company name
        <span v-if="$v.company.$dirty && !$v.company.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
      </label>
      <input
        :class="getClassForInput('company')"
        id="sign-up-form__company"
        type="text"
        name="company"
        v-model.trim="company"
        @blur="$v.company.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('address')" for="sign-up-form__address">
        Address
        <span v-if="$v.address.$dirty && !$v.address.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
      </label>
      <input
        :class="getClassForInput('address')"
        id="sign-up-form__address"
        type="text"
        name="address"
        v-model.trim="address"
        @blur="$v.address.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('brands')" for="sign-up-form__brands">
        Top 3 brands
        <span v-if="$v.brands.$dirty && !$v.brands.required" class="sign-up-form__error">
          {{ ' ' }}are required
        </span>
      </label>
      <input
        :class="getClassForInput('brands')"
        id="sign-up-form__brands"
        type="text"
        name="brands"
        v-model.trim="brands"
        @blur="$v.brands.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('phone')" for="sign-up-form__phone">
        Telephone
        <span v-if="$v.phone.$dirty && !$v.phone.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
        <span v-else-if="$v.phone.$dirty && !$v.phone.validPhone" class="sign-up-form__error">
          {{ ' ' }}number is not valid
        </span>
      </label>
      <input
        :class="getClassForInput('phone')"
        id="sign-up-form__phone"
        type="tel"
        name="phone"
        v-model.trim="phone"
        @blur="$v.phone.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('email')" for="sign-up-form__email">
        Email address
        <span v-if="$v.email.$dirty && !$v.email.required" class="sign-up-form__error">
          {{ ' ' }}is required
        </span>
        <span v-else-if="$v.email.$dirty && !$v.email.email" class="sign-up-form__error">
          {{ ' ' }}should be a correct email
        </span>
      </label>
      <input
        :class="getClassForInput('email')"
        id="sign-up-form__email"
        type="email"
        name="email"
        v-model.trim="email"
        @blur="$v.email.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <label :class="getClassForLabel('confirmEmail')" for="sign-up-form__email-confirm">
        Confirm Email address
        <span
          v-if="$v.confirmEmail.$dirty && !$v.confirmEmail.required"
          class="sign-up-form__error"
        >
          {{ ' ' }}is required
        </span>
        <span
          v-else-if="$v.confirmEmail.$dirty && !$v.confirmEmail.sameAs"
          class="sign-up-form__error"
        >
          {{ ' ' }}should match the email
        </span>
      </label>
      <input
        :class="getClassForInput('confirmEmail')"
        id="sign-up-form__email-confirm"
        type="email"
        v-model.trim="confirmEmail"
        @blur="$v.confirmEmail.$touch()"
      />
    </fieldset>

    <fieldset class="sign-up-form__field">
      <input
        class="sign-up-form__checkbox visually-hidden"
        id="sign-up-form__agreement"
        type="checkbox"
        name="agreement"
        v-model="agreement"
      />
      <label class="sign-up-form__checkbox-label" for="sign-up-form__agreement">
        Accept agreement
      </label>
    </fieldset>

    <button class="sign-up-form__submit" type="submit" :disabled="isSubmitDisabled">
      Register
    </button>
  </form>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      country: '',
      name: '',
      surname: '',
      company: '',
      address: '',
      brands: '',
      phone: '',
      email: '',
      confirmEmail: '',
      agreement: false,
    }
  },
  validations: {
    country: { required },
    name: { required },
    surname: { required },
    company: { required },
    address: { required },
    brands: { required },
    phone: {
      required,
      validPhone(value) {
        const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g

        return regex.test(value)
      },
    },
    email: { email, required },
    confirmEmail: { required, sameAs: sameAs('email') },
    agreement: { sameAs: sameAs(() => true) },
  },
  computed: {
    isSubmitDisabled() {
      return this.$v.$invalid
    },
  },
  methods: {
    getClassForLabel(validatorName) {
      let className = 'sign-up-form__label'

      if (this.$v[validatorName].$error) {
        className += ' sign-up-form__label--warning'
      }

      return className
    },
    getClassForInput(validatorName) {
      let className = 'sign-up-form__input'

      if (this.$v[validatorName].$error) {
        className += ' sign-up-form__input--warning'
      } else if (!this.$v[validatorName].$invalid) {
        className += ' sign-up-form__input--confirmed'
      }

      return className
    },
    handleSubmit() {
      this.$router.push({
        path: '/',
        query: {
          name: this.name,
          email: this.email,
        },
      })
    },
  },
}
</script>

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

    &--warning {
      color: $warning;
    }
  }

  &__error {
    color: $warning;
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
  }

  &__input {
    &:active,
    &:focus,
    &:hover {
      border-bottom-color: transparent;
      background-image: linear-gradient(
        to right,
        $gradient-confirm-start 0,
        $gradient-confirm-end 100%
      );
      background-repeat: no-repeat;
      background-position: center bottom -2px;
      background-size: 100% 2px;
    }

    &--confirmed,
    &--warning {
      border-bottom-color: transparent;
      background-repeat: no-repeat, no-repeat;
      background-position: center bottom -2px, center right 8px;
      background-size: 100% 2px, 12px 9px;
    }

    &--confirmed {
      background-image: linear-gradient(
          to right,
          $gradient-confirm-start 0,
          $gradient-confirm-end 100%
        ),
        url('../assets/images/icons/confirm.svg');

      &:active,
      &:focus,
      &:hover {
        background-image: linear-gradient(
            to right,
            $gradient-confirm-start 0,
            $gradient-confirm-end 100%
          ),
          url('../assets/images/icons/confirm.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: center bottom -2px, center right 8px;
        background-size: 100% 2px, 12px 9px;
      }
    }

    &--warning {
      background-image: linear-gradient(to right, $gradient-error-start 0, $gradient-error-end 100%),
        url('../assets/images/icons/alert.svg');

      &:active,
      &:focus,
      &:hover {
        border-bottom-color: transparent;
        background-image: linear-gradient(
            to right,
            $gradient-error-start 0,
            $gradient-error-end 100%
          ),
          url('../assets/images/icons/alert.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: center bottom -2px, center right 8px;
        background-size: 100% 2px, 12px 9px;
      }
    }

    &::-ms-clear {
      display: none;
    }
  }

  &__select {
    padding-right: 44px;
    cursor: pointer;
    background-image: url('../assets/images/icons/angle-down.svg');
    background-repeat: no-repeat;
    background-position: center right 16px;
    background-size: 15px 8px;
    appearance: none;

    &:active,
    &:focus,
    &:hover {
      border-bottom-color: transparent;
      background-image: linear-gradient(
          to right,
          $gradient-confirm-start 0,
          $gradient-confirm-end 100%
        ),
        url('../assets/images/icons/angle-down.svg');
      background-repeat: no-repeat, no-repeat;
      background-position: center bottom -2px, center right 16px;
      background-size: 100% 2px, 15px 8px;
    }

    &--confirmed,
    &--warning {
      border-bottom-color: transparent;
      background-repeat: no-repeat, no-repeat;
      background-position: center bottom -2px, center right 8px;
      background-size: 100% 2px, 12px 9px;
    }

    &--confirmed {
      background-image: linear-gradient(
          to right,
          $gradient-confirm-start 0,
          $gradient-confirm-end 100%
        ),
        url('../assets/images/icons/confirm.svg');

      &:active,
      &:focus,
      &:hover {
        background-image: linear-gradient(
            to right,
            $gradient-confirm-start 0,
            $gradient-confirm-end 100%
          ),
          url('../assets/images/icons/confirm.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: center bottom -2px, center right 8px;
        background-size: 100% 2px, 12px 9px;
      }
    }

    &--warning {
      background-image: linear-gradient(to right, $gradient-error-start 0, $gradient-error-end 100%),
        url('../assets/images/icons/alert.svg');

      &:active,
      &:focus,
      &:hover {
        background-image: linear-gradient(
            to right,
            $gradient-error-start 0,
            $gradient-error-end 100%
          ),
          url('../assets/images/icons/alert.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: center bottom -2px, center right 8px;
        background-size: 100% 2px, 12px 9px;
      }
    }

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
    top: 4px;
    left: 4px;
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

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
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
