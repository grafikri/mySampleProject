import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

Vue.use(VueRouter);

const layout = {
  header: Header,
  footer: Footer,
};

const routes = [
  {
    path: '/',
    components: {
      default: () => import('@/views/Home.vue'),
      ...layout,
    },
  },
  {
    path: '/contact',
    components: {
      default: () => import('@/views/Contact.vue'),
      ...layout,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
