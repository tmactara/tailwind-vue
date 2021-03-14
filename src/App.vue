<template>
  <div id="app">
    <Example msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Example from './views/example.vue'

export default {
  name: 'App',
  components: {
    Example
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
