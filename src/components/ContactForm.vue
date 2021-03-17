<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-form-group
        label="Your Name:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          placeholder="Enter name"
          maxlength="100"
          required
        />
      </b-form-group>
      <b-form-group
        label="Email address:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          maxlength="100"
          required
          :state="isEmailValid"
        />
      </b-form-group>
      <b-form-group
        label="Your phone number:"
        label-for="input-phone"
      >
        <b-form-input
          id="input-phone"
          v-model="form.phonenumber"
          type="tel"
          placeholder="Enter cell phone e.g. - 5551234567"
          required
          :state="isPhoneNumberValid"
        />
      </b-form-group>

      <b-form-group
        label="Country:"
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
          You must select a country from list
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Your thoughts:"
        label-for="input-text"
      >
        <b-form-textarea
          id="input-text"
          v-model="form.text"
          placeholder="Enter something..."
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
        Submit
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
