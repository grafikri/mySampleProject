<template>
  <div>
    <Header
      :is-logged-in="user.loggedIn"
      :user-name="user.name"
      :user-email="user.email"
      @handleClickSignOut="handleClickSignOut"
      @handleClickLogin="handleClickLogin"
    />

    <slot />
    <Footer />

    <b-modal
      ref="login-modal"
      title="Login"
      hide-footer
    >
      <LoginForm @submit="loginSubmit" />
    </b-modal>
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { mapMutations, mapState } from 'vuex';

import { BModal } from 'bootstrap-vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    LoginForm,
    BModal,
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations('user', [
      'login',
      'logout',
    ]),
    handleClickSignOut() {
      this.logout();
    },
    handleClickLogin() {
      this.$refs['login-modal'].show();
    },
    /**
     * @param {{name: String, email: String, password: String}} payload
     */
    loginSubmit(payload) {
      this.login({ name: payload.name, email: payload.email });
      this.$refs['login-modal'].hide();
    },
  },
};
</script>

<style>

</style>
