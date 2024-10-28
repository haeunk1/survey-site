<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="button-group">
        <button @click="login" class="btn login-btn">로그인</button>
        <button @click="register" class="btn register-btn">회원가입</button>
      </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      login() {
        alert(`Logging in as ${this.username}`);
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
  