import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/IndexPage.vue';
import Login from './pages/LoginPage.vue';  // 잘못된 파일명 수정 (Index.vue -> Login.vue)

const routes = [
  {
    path: '/',
    name: 'indexPage',
    component: Index,
  },
  {
    path: '/login',
    name: 'loginPage',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

export default router;