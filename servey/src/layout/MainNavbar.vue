<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isLoggedIn">
        <button @click="logout">Logout</button>
      </li>
      <li v-else>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: "MainNavbar",
  computed:{
      ...mapState('authStore',['accessToken']),
      ...mapGetters('authStore',['isLoggedIn'])
    },
  methods:{
    ...mapMutations('authStore',['clearAccessToken']),
    logout(){
      this.clearAccessToken();
      alert("로그아웃 되었습니다.");
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
