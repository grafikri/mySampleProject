<template>
  <div>
    <h1>{{ $t('pages.contact.title') }}</h1>
    <ContactForm
      :countries="countries"
      :name="user.name"
      :email="user.email"
      @submit="submit"
    />
  </div>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue';
import { mapState } from 'vuex';

const enCountries = [
  { id: 'TR', name: 'Turkey' },
  { id: 'US', name: 'United States of America' },
  { id: 'GB', name: 'United Kingdom' },
  { id: 'DE', name: 'Germany' },
  { id: 'SE', name: 'Sweden' },
  { id: 'KE', name: 'Kenya' },
  { id: 'BR', name: 'Brazil' },
  { id: 'ZW', name: 'Zimbabwe' },
];

const trCountries = [
  { id: 'TR', name: 'Türkiye' },
  { id: 'US', name: 'Amerika Birleşik Devletleri' },
  { id: 'GB', name: 'Birleşik Krallık' },
  { id: 'DE', name: 'Almanya' },
  { id: 'SE', name: 'İsveç' },
  { id: 'KE', name: 'Kenya' },
  { id: 'BR', name: 'Brezilya' },
  { id: 'ZW', name: 'Zimbabve' },
];

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
  computed: {
    ...mapState(['user']),
    countries() {
      switch (this.$i18n.locale) {
        case 'tr':
          return trCountries;
        case 'en':
          return enCountries;
        default:
          return trCountries;
      }
    },
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
