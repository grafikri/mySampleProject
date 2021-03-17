import Vue from 'vue';
import VueRouter from 'vue-router';

import MainLayout from '@/views/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      default: () => import('@/views/Home.vue'),
      layout: MainLayout,
    },
  },
  {
    path: '/contact',
    components: {
      default: () => import('@/views/Contact.vue'),
      layout: MainLayout,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
