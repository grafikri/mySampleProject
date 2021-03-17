<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-form-group
        label="Title:"
        label-for="input-title"
      >
        <b-form-input
          id="input-title"
          v-model="form.title"
          placeholder="Enter title"
          maxlength="100"
          required
        />
      </b-form-group>
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
        />
      </b-form-group>
      <b-form-group
        label="Your phone number:"
        label-for="input-phone"
      >
        <b-form-input
          id="input-phone"
          v-model="form.phone"
          type="tel"
          placeholder="Enter cell phone e.g. - 5551234567"
          required
        />
      </b-form-group>

      <b-form-group
        label="Country:"
        label-for="input-text"
      >
        <vue-bootstrap-typeahead
          v-model="query"
          :data="countries"
          :serializer="s => s.name"
          @hit="handleSelected"
        />
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
  },
  data() {
    return {
      query: null,
      form: {
        title: 'dsada', name: 'dsada', email: 'dadsqds@dsadaa', phone: 'asdada', text: 'dsadasda', countryId: null,
        // title: null,
        // name: null,
        // email: null,
        // phone: null,
        // text: null,
        // countryId: null,
      },
    };
  },
  watch: {
    query(newVal) {
      if (newVal.length === 0) {
        this.form.countryId = null;
      }
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form);
      // this.form = {
      //   title: null,
      //   name: null,
      //   email: null,
      //   phone: null,
      // };
    },
    handleSelected(payload) {
      this.form.countryId = payload.id;
      console.log('payload', payload);
    },
  },
};
</script>

<style>

</style>
