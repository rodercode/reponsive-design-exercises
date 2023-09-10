<template>
  <!-- GRID CONTAINER -->
  <div class="p-4">
    <!-- NAVIGATION -->
    <header class="flex justify-between">
      <IconMenu class="w-8 h-8" />
      <!-- BUTTON LINK -->
      <a
        class="px-8 py-2 text-base font-bold text-white border-2 rounded-3xl border-primary-color bg-primary-color inline-box"
        href="#"
        >Get Started</a
      >
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import icons
import IconMenu from "~icons/heroicons/bars-3";

export default defineComponent({
  components: {
    IconMenu,
  },
  name: "HomeView",
  data() {
    return {};
  },
});
</script>
