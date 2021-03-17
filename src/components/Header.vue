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
              to="/contact"
            >
              Contact
            </b-nav-item>

            <b-nav-item-dropdown
              text="Lang"
              right
            >
              <b-dropdown-item href="#">
                EN
              </b-dropdown-item>
              <b-dropdown-item href="#">
                ES
              </b-dropdown-item>
              <b-dropdown-item href="#">
                RU
              </b-dropdown-item>
              <b-dropdown-item href="#">
                FA
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
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
  },
};
</script>

<style>

</style>
