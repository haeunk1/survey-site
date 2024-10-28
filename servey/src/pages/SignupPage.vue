<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="username">이름</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">비밀번호 확인</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <button type="submit" class="btn register-btn">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async register() {
      // 비밀번호와 비밀번호 확인이 일치하는지 확인
      if (this.password !== this.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      // 회원가입 로직 처리 (API 요청 등)
      const formData = new FormData();
      formData.append('email',this.email);
      formData.append('name', this.username);
      formData.append('password', this.password);

      try {
        const response = await axios.post('/api/auth/signup', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('응답:', response.data);
      } catch (error) {
        console.error('실패:', error);
      }
      alert(`회원가입을 환영합니다, ${this.username}님!`);
      
      // 예시로 메인 페이지로 이동 (원하는 경로로 변경 가능)
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.signup-container {
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
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #005f7a;
}
</style>