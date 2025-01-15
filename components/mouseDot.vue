<template>
  <div
    ref="circle"
    class="bg-accent w-3 h-3 rounded-full absolute pointer-events-none"
  ></div>
</template>

<script>
export default {
  setup() {
    const circle = ref(null);

    onMounted(() => {
      document.addEventListener("mousemove", (event) => {
        if (circle.value) {
          circle.value.style.left = event.clientX - 6 + "px";

          circle.value.style.top = event.clientY - 7 + "px";
        }
      });
    });

    return { circle };
  },
};
</script>
