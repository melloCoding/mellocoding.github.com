<template>
  <div class="pt-10">
    <p class="text-5xl text-center">Error 404</p>
    <p class="text-center pt-5">
      Oops Your not supposed to be here. Click the button to return to the
      homepage.
    </p>
    <div class="flex justify-center pt-3">
      <nuxtLink to="/"><div class="btn">Return Home</div></nuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Error: 404",
});
</script>
