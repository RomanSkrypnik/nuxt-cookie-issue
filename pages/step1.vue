<template>
  <div>
    <div>Step 1</div>
    <ol>
      <li>*Setting cookie*</li>
      <li>Refresh browser to set cookie on server</li>
      <li>Click on step 2</li>
    </ol>
  </div>
</template>
<script setup lang="ts">
useCookie('test-cookie', { maxAge: 3600 * 1000 * 24 * 365 * 10 }).value = 'gdsgdgds';

// useCookie('test-cookie'); // comment this code
</script>
