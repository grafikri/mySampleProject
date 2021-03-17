<template>
  <div>
    <Header
      :is-logged-in="user.loggedIn"
      :user-name="user.name"
      :user-email="user.email"
      @handleClickSignOut="handleClickSignOut"
    />
    <slot />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations('user', [
      'logout',
    ]),
    handleClickSignOut() {
      this.logout();
    },
  },
};
</script>

<style>

</style>
