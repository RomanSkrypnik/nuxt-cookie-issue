<template>
  <nuxt-link to="/">
    index
  </nuxt-link>
</template>
<script setup>
definePageMeta({
  middleware: () => {
    useTestCookie({ maxAge: 3600 * 1000 * 24 * 365 * 10 }).value = 'gdsgdgds';
  }
});

useTestCookie();
</script>

