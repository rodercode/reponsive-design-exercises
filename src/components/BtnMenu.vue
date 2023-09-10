<template>
  <button @click="toggleMenu">
    <IconMenu class="w-8 h-8" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconMenu from "~icons/heroicons/bars-3";

export default defineComponent({
  components: {
    IconMenu,
  },
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      console.log("toggle menu");
    },
  },
});
</script>
