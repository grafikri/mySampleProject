<template>
  <div>
    <h1>Contact</h1>
    <ContactForm
      :countries="[
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
      ]"
      :name="user.name"
      :email="user.email"
      @submit="submit"
    />
  </div>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue';
import { mapState } from 'vuex';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    submit(payload) {
      console.log('contact form data', payload);
    },
  },
};
</script>

<style>

</style>
