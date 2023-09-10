<template>
  <button @click="toggleMenu">
    <IconMenu class="w-8 h-8" />
    <IconClose class="w-8 h-8 hidden" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconMenu from "~icons/heroicons/bars-3";
import IconClose from "~icons/heroicons/x-mark-20-solid";

export default defineComponent({
  components: {
    IconMenu,
    IconClose,
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
