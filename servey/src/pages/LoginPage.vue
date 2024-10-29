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
  import {mapMutations, mapState, mapGetters } from 'vuex'

  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: ""
      };
    },
    computed:{
      ...mapState(['accessToken']),
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      ...mapMutations(['setAccessToken', 'clearAccessToken']),
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
            console.log('응답:', response.data);
            this.setAccessToken(response.data.accessToken);
            alert(`로그인 되었습니다.`);
            this.$router.push('/');

          } catch (error) {
            console.error('실패:', error);
            alert("에러가 발생했습니다.")
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
  
  <style scoped>
 .login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 95%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.button-group {
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 10px; /* 버튼 간격 설정 */
  margin-top: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}


  </style>
  