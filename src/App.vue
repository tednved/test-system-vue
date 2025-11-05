<template>
  <div id="app">
    <NavBar v-if="showNav" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'

const route = useRoute()
const showNav = computed(() => !['/login', '/register'].includes(route.path))
</script>

<style>
body {
  margin: 0;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  background-color: #f5f7fa;
}
#app {
  min-height: 100vh;
}
</style>
