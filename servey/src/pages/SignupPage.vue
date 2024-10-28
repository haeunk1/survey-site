<template>
    <div class="signup-page">
      <h2>Signup</h2>
      <form @submit.prevent="handleSignup">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
<script>
    export default {
        name: "SignupPage",
        data() {
        return {
            username: "",
            password: ""
        };
        },
        methods: {
            login() {
                alert(`Logging in as ${this.username}`);
            }
        }
    };
  </script>