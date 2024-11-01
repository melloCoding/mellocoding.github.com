<template>
  <div>
    <AppHeader />
    <h1 class="text-5xl font-bold text-center mb-10">Robotics page</h1>
    <div class="sm: flex-none md:flex mx-10">
      <div>
        <p>
          I am a member of the robotics team at Coral Springs Charter School. We
          partcipate in the First Tech Challenge(FTC). We are team 13233 Cyber
          Kinghts. The FTC Game for this year is Into The Deep.
        </p>
      </div>
      <div>
        <img
          src="/imgs/robotics/intothedeep.bmp"
          alt="into the deep season picture"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Robotics",
});
</script>
