<template>
  <AppHeader />

  <h1 class="text-5xl font-bold text-center mb-10">Projects</h1>
  <div class="divider px-10"></div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-stretch px-[5%] gap-[5%] mb-10 item-center"
  >
    <!-- Edit the image source-->
    <ProjectCard
      title="Custom Hitbox Controller V1"
      description="Custom made hitbox style controller for tekken"
      imageSrc="/imgs/hitbox1.jpeg"
      imgAltText="A 3d printed hitbox flat controller that is orange and white"
      routeLocation="projects/hitboxv1"
    />
  </div>
</template>
