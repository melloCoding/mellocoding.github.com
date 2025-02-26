<template class="">
  <div class="">
    <AppHeader />
    <MouseDot />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/AppHeader.vue";
</script>
<style>
body {
  cursor: none !important;
}
img:hover {
  cursor: none !important;
}
a:hover {
  cursor: none !important;
}

NuxtLink:hover {
  cursor: none !important;
}

.btn:hover {
  cursor: none !important;
}
</style>
