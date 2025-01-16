<template>
  <div>
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
        </div>
      </div>
    </div>
    <!--Divider to seporate the recent projects from the hero-->
    <div class="divider px-10"></div>
    <h1 class="font-bold text-center text-4xl pb-10">Recent Updates</h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-stretch px-[5%] gap-[5%] mb-10 item-center"
    >
      <!----------------------------------------------------------------------------------
    Component: Project Card
    The project card is a componet that holds a basic card with a title body description
    a and an image the component itself has a nuxtLink built in.

    Editable fields:
    title=""
    the title is the text at the top of the card that acts as a title

    description=""
    the description is the text below the title that provieds a breif description of
    what might pop up if the user clicks on the link

    imgSrc=""
    this is the image that pops up beneth the description just put the path local path
    to the image in the field

    imgAltText=""
    This provides the image alt text for the image above

    routeLocation=""
    This provides the location for the route for when the user clicks on the card
    ----------------------------------------------------------------------------------->
      <ProjectCard
        title="Custom Hitbox Controller V1"
        description="Custom made hitbox style controller for tekken"
        imageSrc="/imgs/projects/hitboxv1/hitboxv1.jpeg"
        imgAltText="A 3d printed hitbox flat controller that is orange and white"
        routeLocation="projects/hitboxv1"
      />
      <ProjectCard
        title="First Website Documented Build Log"
        description="First actually documented week of our robot for FTC team 13233 The Cyber Knights"
        imageSrc="/imgs/robotics/roboticsWeek1.png"
        imgAltText="basic image with the text 13233 cyber knights week 1 log"
        routeLocation="robotic/weekone"
      />
      <ProjectCard
        title="Clothes Conundrum Version v0.0.1"
        description="This is the Dev Log for my game Clothes Conundrum"
        imageSrc="/imgs/clothesconundrumbg.png"
        imgAltText="Image of Potatoes"
        routeLocation="gameDev/clothesConundrum/0.0.1"
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
