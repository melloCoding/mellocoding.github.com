<template>
  <div>
    <h1 class="text-5xl font-bold text-center mb-10">Robotics page</h1>
    <div class="sm:flex-none md:flex mx-10">
      <div>
        <p class="text-xl mb-10">
          I am a member of the robotics team at Coral Springs Charter School. We
          partcipate in the First Tech Challenge(FTC). We are team 13233 Cyber
          Kinghts. The FTC Game for this year is Into The Deep. We are currently
          in the process of building our robot for the season we have an
          oporational teleop but currently no autonomous.
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
    <div class="divider"></div>
    <div>
      <h1 class="text-4xl font-bold text-center mb-10">Updates</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-stretch px-[5%] gap-[5%] mb-10 item-center"
      >
        <ProjectCard
          title="First Website Documented Build Log"
          description="First actually documented week of our robot for FTC team 13233 The Cyber Knights"
          imageSrc="/imgs/robotics/roboticsWeek1.png"
          imgAltText="basic image with the text 13233 cyber knights week 1 log"
          routeLocation="robotic/weekone"
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
