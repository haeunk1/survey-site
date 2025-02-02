<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" required />
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
      name: "",
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
      // 회원가입 로직 처리 
      const requestData = {
          email: this.email,
          name: this.name,
          password: this.password
        };
      try {
        const response = await axios.post('/api/auth/signUp', requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('응답:', response.data);
        alert(`회원가입을 환영합니다, ${this.name}님!`);
        this.$router.push('/login');

      } catch (error) {
        console.error('실패:', error);
        alert("에러가 발생했습니다.")
      }
      
    }
  }
};
</script>

<style src="@assets/css/signupStyle.css"></style>
