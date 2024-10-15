<template>
  <div>
    <AppHeader />
    <!--Hero for name picture and description-->
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <a
          target="_blank"
          href="https://github.com/melloCoding"
          class="md:hover:scale-105 transition ease-in-out"
        >
          <img
            src="/assets/imgs/logo.jpeg"
            class="max-w-sm rounded-2xl shadow-2xl"
          />
        </a>
        <div>
          <h1 class="text-5xl font-bold">Jeffrey Mello</h1>
          <p class="py-6">Beginier web developer and Game Devloper.</p>
          <!-- <button class="btn btn-primary">View Projects</button> -->
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-stretch px-[5%] gap-[5%] mb-10"
    >
      <ProjectCard
        title="Clothes Conundrum Version v0.0.1"
        description="This is the Dev Log for my game Clothes Conundrum"
        imageSrc="/imgs/clothesconundrumbg.png"
        imgAltText="Image of Potatoes"
        routeLocation="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
      />

      <ProjectCard
        title="Potatoes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
        imgAltText="Image of Potatoes"
      />

      <ProjectCard
        title="Potatoes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
        imgAltText="Image of Potatoes"
      />

      <ProjectCard
        title="Grass"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
        imgAltText="Image of Grass"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/projectCard.vue";

export default {
  components: {
    ProjectCard,
  },
};
</script>
