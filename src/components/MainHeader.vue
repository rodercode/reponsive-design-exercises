<template>
  <header class="flex justify-between">
    <IconMenu class="w-8 h-8" />
    <BaseLinkButton name="Get Started" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconMenu from "~icons/heroicons/bars-3";

// IMPORT COMPONENTS
import BaseLinkButton from "./base/BaseLinkButton.vue";

export default defineComponent({
  components: {
    BaseLinkButton,
    IconMenu,
  },
  data() {
    return {};
  },
});
</script>
