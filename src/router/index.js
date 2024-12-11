import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import SecondView from '../views/SecondView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/secondPage',
      name: 'Second page',
      component: SecondView,
    },
  ],
});

export default router;
