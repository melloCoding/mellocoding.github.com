<template>
  <div class="card bg-secondary w-auto rounded-lg content-start">
    <div class="card-body">
      <h1 class="card-title">Jeffrey Mello</h1>
      <p>
        {{ description }}
      </p>
    </div>
    <!-- Place Holder Image CHANGE BEOFRE DONE WITH LIKE YOUR FISH OR SOMETHING-->
    <figure>
      <img :src="imageSrc" />
    </figure>
  </div>

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
      },
    };
  </script>
</template>
