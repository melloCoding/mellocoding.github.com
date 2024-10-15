<template>
  <!--Main body of the card-->
  <div
    class="card bg-secondary w-auto rounded-lg content-start sm:hover:scale-100 md:hover:scale-105 transition ease-in-out md:hover:underline drop-shadow-xl"
  >
    <div class="card-body">
      <!--Card Title-->
      <h1 class="card-title">{{ title }}</h1>
      <!--Card Description-->
      <p>
        {{ description }}
      </p>
      <!--Card Image-->
    </div>
    <figure class="h-[50%]">
      <!-- prettier-ignore-attribute -->
      <img
        class="object-cover h-full w-full"
        :src="imageSrc"
        :alt="imgAltText"
      />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    //allows the image on the card to be editied in the component when it is imported
    imageSrc: {
      type: String,
      required: true,
    },
    //allows the description or body text on the card to be editied in the component when it is imported
    description: {
      type: String,
      required: true,
    },
    //allows the title on the card to be editied in the component when it is imported
    title: {
      type: String,
      required: true,
    },
    //allows the alt text on the image on the card to be editied wherever the file may be imported
    imgAltText: {
      type: String,
      required: true,
    },
  },
};
</script>
