<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-form-group
        :label="$t('form.yourName')"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          :placeholder="$t('form.enterName')"
          maxlength="100"
          required
        />
      </b-form-group>
      <b-form-group
        :label="$t('form.emailAddress')"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          :placeholder="$t('form.enterEmail')"
          maxlength="100"
          required
          :state="isEmailValid"
        />
      </b-form-group>
      <b-form-group
        :label="$t('form.yourPhoneNumber')"
        label-for="input-phone"
      >
        <b-form-input
          id="input-phone"
          v-model="form.phonenumber"
          type="tel"
          :placeholder="$t('form.enterCellPhoneNumber')"
          required
          :state="isPhoneNumberValid"
        />
      </b-form-group>

      <b-form-group
        :label="$t('form.country')"
        label-for="input-text"
      >
        <vue-bootstrap-typeahead
          :key="countryKey"
          v-model="query"
          :data="countries"
          :serializer="s => s.name"
          @hit="handleSelected"
        />
        <b-form-invalid-feedback :state="isCountryValid">
          {{ $t('form.countryDesc') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        :label="$t('form.yourThoughts')"
        label-for="input-text"
      >
        <b-form-textarea
          id="input-text"
          v-model="form.text"
          :placeholder="$t('form.enterSomething')"
          rows="3"
          max-rows="6"
          maxlength="255"
          required
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
      >
        {{ $t('button.submit') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>

import {
  BForm,
  BButton,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormInvalidFeedback,
} from 'bootstrap-vue';

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

export default {
  name: 'ContactForm',
  components: {
    BForm,
    BButton,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    VueBootstrapTypeahead,
    BFormInvalidFeedback,
  },
  props: {
    countries: {
      type: Array,
      /**
       * @returns {{id: String, name: String}[]}
       */
      default() {
        return [

        ];
      },
    },
    email: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },

  },

  data() {
    return {
      countryKey: 0,
      query: null,
      isCountryValid: true,
      form: {
        name: this.name,
        email: this.email,
        phonenumber: null,
        text: null,
        country_code: null,
      },
    };
  },
  computed: {
    isPhoneNumberValid() {
      return this.form?.phonenumber?.length >= 10;
    },
    isEmailValid() {
      return (this.form?.email?.match(/\w@\w/gm))?.length > 0;
    },
  },
  watch: {
    query(newVal) {
      if (newVal?.length === 0) {
        this.form.country_code = null;
      }
    },
    name(newVal) {
      this.form.name = newVal;
    },
    email(newVal) {
      this.form.email = newVal;
    },
    countries() {
      this.countryKey = Math.random();
    },
  },
  methods: {
    onSubmit() {
      if (this.form?.country_code === null) {
        this.isCountryValid = false;
        return;
      }
      this.$emit('submit', this.form);
      this.countryKey = Math.random();
      this.form = {
        name: null, email: null, phonenumber: null, text: null, country_code: null,
      };
      this.query = null;
      this.isCountryValid = true;
    },
    handleSelected(payload) {
      this.form.country_code = payload.id;
    },
  },
};
</script>

<style>

</style>
