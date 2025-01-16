<template>
  <div>
    <AppHeader />
    <MouseDot />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/AppHeader.vue";
</script>
