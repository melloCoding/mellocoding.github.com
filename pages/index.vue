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
