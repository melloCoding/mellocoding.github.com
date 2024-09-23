<template>
  <!--Projects-->
  <div>
    <AppHeader />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-stretch px-[5%] gap-[5%]"
    >
      <ProjectCard
        title="Potatoes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
      />

      <ProjectCard
        title="Potatoes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
      />

      <ProjectCard
        title="Potatoes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
      />

      <ProjectCard
        title="Grass"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            sit, molestiae voluptates perspiciatis accusantium cum corrupti
            rerum et, facilis blanditiis laudantium quis velit ipsum at non
            doloribus voluptate sunt!"
        imageSrc="https://images.unsplash.com/photo-1533460004989-cef01064af7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhc3N8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  </div>
</template>

<script>
import InfoCard from "~/components/project-card.vue";

export default {
  components: {
    InfoCard,
  },
};
</script>
