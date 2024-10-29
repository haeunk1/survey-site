import Vuex from 'vuex';

import authStore from '@/store/modules/authStore.js'

const store = new Vuex.Store({
    modules:{
        authStore,
    }
});
export default store;