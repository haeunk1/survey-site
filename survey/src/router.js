import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/IndexPage.vue';
import Login from './pages/LoginPage.vue';
import Signup from './pages/SignupPage.vue';
import SurveyDetailPage from './pages/survey/SurveyDetailPage.vue';
import SurveyPage from './pages/survey/SurveyPage.vue';
import store from '@/store'

const routes = [
  { path: '/', name: 'indexPage', component: Index },
  { path: '/login', name: 'loginPage', component: Login },
  { path: '/signup', name: 'signupPage', component: Signup },
  { path: '/survey-detail/:id', name: 'surveyDetailPage', component: SurveyDetailPage },
  { path: '/survey/:id', name: 'surveyPage', component: SurveyPage , meta: { requiresAuth: true } },
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

router.beforeEach((to,from,next) => {
  const isLoggedIn = store.getters['authStore/isLoggedIn'];
  if (to.meta.requiresAuth && !isLoggedIn) {
    alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
    next({
      path: '/login',
      query: { redirect: to.fullPath }, // 원래 요청 경로를 쿼리로 저장
    });
  } else {
    next();
  }
})

export default router;