<template>
  <div>Index</div>
  <ol>
    <li>Refresh page to clear cookie</li>
    <li>*Clears cookie after refresh on server*</li>
    <li>Click on step 1 to reproduce issue</li>
  </ol>
</template>
<script setup lang="ts">
useCookie('test-cookie').value = null;
</script>

