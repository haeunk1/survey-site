<template>
    <div class="login-container">
      <h2>Login</h2>
      <div class="form-group">
          <label for="email">email</label>
          <input type="text" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="button-group">
        <button @click="isLoggedIn ? logout() : login()" class="btn login-btn">{{ isLoggedIn ? '로그아웃' : '로그인' }}</button>
        <button @click="register" class="btn register-btn">회원가입</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import {mapMutations, mapState } from 'vuex'

  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: ""
      };
    },
    computed:{
      ...mapState('authStore',['accessToken'])
    },
    methods: {
      ...mapMutations('authStore',['setAccessToken']),
      async login() {
        const requestData = {
          email: this.email,
          password: this.password
        };
        try {
          const response = await axios.post('/api/auth/signIn', requestData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const token = response.data.data.accessToken;
            this.setAccessToken(token);
            localStorage.setItem('accessToken',token);
            alert(`로그인 되었습니다.`);
            const redirect = this.$route.query.redirect || '/';
            this.$router.push(redirect);

          } catch (error) {
            console.error('실패:', error);
            alert("에러가 발생했습니다.");
          }
      },
      logout() {
        this.clearAccessToken();
      },
      register(){
        this.$router.push('/signup')
      }
    }
  };
  </script>
  
  <style src="@assets/css/loginStyle.css"></style>