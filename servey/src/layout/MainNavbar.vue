<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
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
