<template>
  <ol style="padding: 0">
    <li>Open inspector and watch cookie for maxAge/expires</li>
    <li>Refresh</li>
    <li>Cookie maxAge/expires is reset</li>
  </ol>
  <div style="display: flex; gap: 8px; margin-bottom: 8px">
    <nuxt-link v-for="(item, idx) in items" :key="idx" :to="item.to">
      {{ item.text }}
    </nuxt-link>
  </div>
  <slot />
</template>

<script setup lang="ts">
const items = [
  {
    to: '/',
    text: 'index',
  },
  {
    to: '/step1',
    text: 'step 1',
  },
  {
    to: '/step2',
    text: 'step 2'
  }
];
</script>
