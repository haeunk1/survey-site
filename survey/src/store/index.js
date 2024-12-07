
import { createStore } from 'vuex';
import authStore from '@/store/modules/authStore.js';

const store = createStore({
  modules: {
    authStore,
  },
});

export default store;