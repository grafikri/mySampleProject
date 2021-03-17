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
      @submit="submit"
    />
  </div>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
  methods: {
    /**
     * @type {{title: String, name: String, email: String, phone: String }}
     */
    submit(payload) {
      console.log('submit', payload);
    },
  },
};
</script>

<style>

</style>
