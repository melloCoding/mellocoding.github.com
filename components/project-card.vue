<template>
  <div
    class="card bg-secondary w-auto rounded-lg content-start hover:scale-110 transition ease-in-out"
  >
    <div class="card-body">
      <h1 class="card-title">{{ title }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
    <!-- Place Holder Image CHANGE BEOFRE DONE WITH LIKE YOUR FISH OR SOMETHING-->
    <figure class="h-[50%]">
      <img :src="imageSrc" />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
