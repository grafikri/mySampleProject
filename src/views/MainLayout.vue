<template>
  <div>
    <Header @handleClickSignOut="handleClickSignOut" />
    <slot />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
  methods: {
    handleClickSignOut() {
      console.log('logout');
    },
  },
};
</script>

<style>

</style>
