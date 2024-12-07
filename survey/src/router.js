import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/IndexPage.vue';
import Login from './pages/LoginPage.vue';
import Signup from './pages/SignupPage.vue';
import SurveyDetailPage from './pages/survey/SurveyDetailPage.vue';
import SurveyPage from './pages/survey/SurveyPage.vue';

const routes = [
  { path: '/', name: 'indexPage', component: Index },
  { path: '/login', name: 'loginPage', component: Login },
  { path: '/signup', name: 'signupPage', component: Signup },
  { path: '/survey-detail/:id', name: 'surveyDetailPage', component: SurveyDetailPage },
  { path: '/survey/:id', name: 'surveyPage', component: SurveyPage },
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