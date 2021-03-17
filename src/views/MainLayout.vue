<template>
  <div>
    <Header
      :title="title"
      :is-logged-in="user.loggedIn"
      :user-name="user.name"
      :user-email="user.email"
      @handleClickSignOut="handleClickSignOut"
      @handleClickLogin="handleClickLogin"
    />

    <b-container>
      <slot />
    </b-container>

    <Footer />

    <b-modal
      ref="login-modal"
      :title="$t('app.login')"
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

import { BModal, BContainer } from 'bootstrap-vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    LoginForm,
    BModal,
    BContainer,
  },
  data() {
    return {
      title: 'Page Title',
    };
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {
    $route(to) {
      this.setTitle(to.name);
    },
  },
  created() {
    this.setTitle(this.$route.name);
  },
  methods: {
    ...mapMutations('user', [
      'login',
      'logout',
    ]),
    /**
     * @param {String} path
     */
    setTitle(path) {
      switch (path) {
        case 'home':
          this.title = this.$i18n.t('pages.home.title');
          break;
        case 'contact':
          this.title = this.$i18n.t('pages.contact.title');
          break;
        default:
          this.title = this.$i18n.t('pages.home.title');
      }
    },
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
