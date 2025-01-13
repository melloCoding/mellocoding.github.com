<template>
  <AppHeader />
  <h1 class="text-5xl font-bold text-center mb-10">Hitbox v1</h1>
  <div class="divider px-10"></div>
  <div>
    <div class="lg:flex px-10 pb-10">
      <p
        class="sm:px-5 md:px-10 mb-10 md:w-[100%] lg:w-[50%] lg:flex-auto md:flex-none"
      >
        This is a project that ive been wanting to take on for a while. Recently
        I've gotten into playing tekken 8 and ive started to to play in some
        tournaments (mainly for fun i'm pretty awful). Thanks to partcipating in
        these tournaments I've come into contact with a new style of controller
        a "Hitbox" controller. So logically I looked into these controllers. I
        was shocked to see that these glorified keyboards were over $150 usd.
        Then and there I decided that I would have to make my own. I decided
        that it would be likely rather simple ordeal. I made the goal for myself
        to only use parts that I already had on hand. This made choosing the
        microcontroller simple. As the only one I had on hand was a Raspberry Pi
        Pico. I then searched the internet in hopes that there was already an
        open source code base that I would be able to use. I was not
        dissapointed I found
        <a
          class="text-accent hover:underline"
          target="_blank"
          href="https://gp2040-ce.info/"
          >GP2040-CE</a
        >
        . GP2040-CE is a gamepad software for rp2040 based devices like the
        Raspberry Pi Pico.
      </p>
      <img
        class="rounded-2xl md:w-[100%] lg:w-[50%] lg:flex-auto md:flex-none"
        src="/imgs/projects/hitboxv1/Screenshot 2025-01-11 at 3.48.09 PM.png"
        alt=""
      />
    </div>
    <div class="px-10">
      <p class="sm:px-5 md:px-10 mb-10">
        I decided to before makeing any other harware decisions that I should
        test GP2040-CE on the PS5 what I would be using for playing Tekken at
        the tournaments, and I goti it working however there was a catch. That
        being that the controller was actaully unable too play any games on the
        PS5
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Hitbox v1",
});
</script>
