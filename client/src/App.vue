<template>
  <main>
    <MySideBar></MySideBar>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import MySideBar from './components/MySideBar.vue';
</script>

<style scoped>
main {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
