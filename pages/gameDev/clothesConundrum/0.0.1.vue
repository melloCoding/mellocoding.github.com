<template>
  <AppHeader />
  <h1 class="text-center font-bold pb-10 text-4xl">
    Clothes Conundrum Version v0.0.1
  </h1>
  <div class="lg:w-full xl:flex px-10">
    <p class="lg:w-full xl:w-[75%] text-xl">
      So in this first version of the game I created some basic art for the
      game. Starting off with the player art which I decided I wanted to make a
      wizard. Then I imported the the player art into Godot and started creating
      the assets I would need for player movement. Then we had movement!!! Next
      step was to import the sprite sheets from my pixel art program, and get
      them working. Once I got the animations playing it was just a simple
      matter of adding the code to the player script to control animations. Next
      it was time to make a tile set to work with. I hoped into Aseprite and
      started designing the tileset. After I drew the tileset I then worked on
      importing it into godot, and after some work ,adding collsions and such, I
      was succesfull. Using the newly created tileset I then created a test
      level to futher test movement and animations. I then set my attention to
      the main mechanic of the game the clothes spreading. This mechanic
      currently isnt working given it is shockingly difficult to have an object
      duplicate itself. But nonetheless the closthes still render if a little
      big but do not do anything yet. You can play a working web build at
      <a
        class="hover:underline text-accent"
        href="https://robothemaster.itch.io/clothes-conundrum"
      >
        this link.
      </a>
    </p>
    <img
      src="/imgs/gameDev/clothesConundrum/0.0.1/tileset.png"
      alt=""
      class="md:w-full xl:w-[25%] image-render-nearest rounded-xl bg-secondary"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Clothes Conundrum 0.0.1",
});
</script>
