<template>
  <div>
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="info"
      >
        <b-navbar-brand to="/">
          <b-icon-briefcase-fill class="d-none d-lg-block" />
          <span class="d-block d-lg-none">{{ title }}</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="d-none d-lg-block">
            <b-nav-text>
              <span class="font-weight-bold">{{ title }}</span>
            </b-nav-text>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              variant="light"
              to="/"
            >
              {{ $t('button.home') }}
            </b-nav-item>
            <b-nav-item
              variant="light"
              to="/contact"
            >
              {{ $t('button.contact') }}
            </b-nav-item>

            <b-nav-item-dropdown
              :text="$t('app.lang')"
              right
            >
              <b-dropdown-item
                v-for="(item, index) in locales"
                :key="index"
                @click="handleLocaleClick(item)"
              >
                {{ item.value }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              v-if="isLoggedIn"
              right
            >
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ userName }}</em>
              </template>
              <b-dropdown-item>
                {{ userEmail }}
              </b-dropdown-item>
              <b-dropdown-item @click="$emit('handleClickSignOut')">
                {{ $t('button.logout') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item
              v-if="!isLoggedIn"
              variant="light"
              @click="$emit('handleClickLogin')"
            >
              {{ $t('button.login') }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>

import {
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BCollapse,
  BNavItemDropdown,
  BNavbarToggle,
  BDropdownItem,
  BNavText,
  BIconBriefcaseFill,
  BNavItem,
} from 'bootstrap-vue';

export default {
  name: 'Header',
  components: {
    BNavText,
    BIconBriefcaseFill,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BCollapse,
    BNavItemDropdown,
    BNavbarToggle,
    BNavItem,
    BDropdownItem,
  },
  props: {
    title: {
      type: String,
      default: 'This is my title',
    },
    isLoggedIn: {
      type: Boolean,
      default: true,
    },
    userName: {
      type: String,
      default: 'John Doe',
    },
    userEmail: {
      type: String,
      default: 'johndoe@mail.com',
    },
  },
  data() {
    return {
      locales: [
        {
          key: 'tr',
          value: this.$i18n.t('app.turkish'),
        },
        {
          key: 'en',
          value: this.$i18n.t('app.english'),
        },
      ],
    };
  },
  methods: {
    /**
     * @param {{key: String, value: String}} item
     */
    handleLocaleClick(item) {
      this.$i18n.locale = item.key;
    },
  },
};
</script>

<style>

</style>
