<template>
  <AppHeader />
  <div>
    <h1 class="text-5xl font-bold text-center mb-10">
      First Documented Build Log For the Into the Deep Season
    </h1>
    <div class="flex px-10">
      <p class="text-xl">
        This is the first actually log for our team's season. I'm a bit late to
        this because i've been busy coding the rest of the website. So at the
        momment we have a mostly functional robot. In the robots curent state it
        can drive around and strafe. The robot is also capable of almost hanging
        itself on the low bar of the truss. We have attached a linear slider to
        the robot aswell to hopefully allow us to score once we have a working
        claw.
      </p>
      <img
        class="w-[50%] rounded-xl"
        src="/imgs/robotics/robotonfeildone.jpeg"
        alt="aformentioned robot on the field"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Robotics Week One Log",
});
</script>
