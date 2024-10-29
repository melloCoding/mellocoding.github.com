<template>
  <AppHeader />
  <h1 class="text-center text-5xl font-bold pb-5">Game Development</h1>
  <p class="text-center text-xl px-10">
    I have begun to learn game development as it is something that has
    interested me for a long time. I first go interested in game development
    when a video by CodyCantEatThis appeared on my recomened feed on youtube
    this led to me learning about game jams and eventually I tried my own
    attempt at one. The GMTK Game Jam 2023 which had the theme Roles Reversed. I
    created a game called Abandoneer in which instead of being a emergency
    helecopter pilot who saved people abandoned in the ocean your goal was to
    abandon theme there. They had to get there somehow. I have since lost the
    files for abandoneer and the submission to the Game Jam was missing key
    files to allow it to run on anothers machine this Game Jam only further
    fueled my intrest in game develpment. After that Game Jam I did not work on
    any games though I was still interested. Later in 2023 I discoverd pirate
    software and I watched his game development steams and eventually he hosted
    his own game jam that I decided to participate in the 2024 Pirate Software
    Game Jam. In which I began to make a game called Clothes Conundrum and thats
    where I am today still working on that game (mainly because I'm lazy and
    have not really worked on it).
  </p>

  <div class="divider px-10"></div>
  <h1 class="font-bold text-center text-4xl pb-10">Recent Updates On Games</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-stretch px-[5%] gap-[5%] mb-10 item-center"
  >
    <ProjectCard
      title="Clothes Conundrum Version v0.0.1"
      description="This is the Dev Log for my game Clothes Conundrum"
      imageSrc="/imgs/clothesconundrumbg.png"
      imgAltText="Image of Potatoes"
      routeLocation="gameDev/clothesConundrum/0.0.1"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Game Development",
});
</script>
