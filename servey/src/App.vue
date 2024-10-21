<template>
  <div id="app">
    <MainNavbar/>
    <router-view></router-view>
    <MainFooter/>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter
    //HelloWorld
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

a.active {
  font-weight: bold;
}
</style>
