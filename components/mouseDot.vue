<template>
  <div
    ref="circle"
    class="backdrop-invert w-3 h-3 rounded-full absolute pointer-events-none z-50"
  ></div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const circle = ref(null);

    onMounted(() => {
      if (process.client) {
        document.addEventListener("mousemove", (event) => {
          if (circle.value) {
            const scrollX = window.scrollX || 0;
            const scrollY = window.scrollY || 0;

            circle.value.style.left = event.clientX + scrollX - 6 + "px";
            circle.value.style.top = event.clientY + scrollY - 7 + "px";
          }
        });
      }
    });

    return { circle };
  },
};
</script>
