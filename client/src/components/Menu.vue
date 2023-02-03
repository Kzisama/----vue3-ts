<template>
  <ul v-if="item.children && item.children.length > 0">
    <li>
      <router-link :to="item.link || item.path">{{ item.title }}</router-link>
      <!-- 递归组件 -->
      <template v-for="(child, index) of item.children" :key="index">
        <Menu :item="child"></Menu>
      </template>
    </li>
  </ul>
  <ul v-else>
    <li>
      <router-link :to="item.link">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})
</script>
