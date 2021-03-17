<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
    >
      <b-form-group
        id="input-group-2"
        label="Your Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        />
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        />
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Email address:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
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
} from 'bootstrap-vue';

export default {
  name: 'LoginForm',
  components: {
    BForm,
    BButton,
    BFormGroup,
    BFormInput,
  },
  data() {
    return {
      form: {
        email: null,
        name: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form);
      this.form = {
        email: null,
        name: null,
        password: null,
      };
    },

  },
};
</script>

<style>

</style>
