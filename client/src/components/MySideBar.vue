<template>
  <aside class="side">
    <ul>
      <li><router-link to="/">首页</router-link></li>
    </ul>
    <template v-for="(item, index) in store.state.routeTree" :key="index">
      <Menu :item="item"></Menu>
    </template>
  </aside>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import Menu from './Menu.vue';

const store = useStore()
</script>

<style scoped>
.side {
  width: 200px;
  height: 100%;
  background-color: skyblue;
}
</style>