
const authStore = {
    state: {
        accessToken: null,
    },
    mutations: {
        setAccessToken(state, token) {
            state.accessToken = token;
        },
        clearAccessToken(state) {
            state.accessToken = null;
        }
    },
    getters: {
        isLoggedIn: state => !!state.accessToken
    }
};
export default authStore;