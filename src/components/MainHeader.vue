<template>
  <header class="flex justify-between">
    <HomeLink />
    <IconMenu class="w-8 h-8" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT ICONS
import IconMenu from "~icons/heroicons/bars-3";

// IMPORT COMPONENTS
import HomeLink from "./main-header/HomeLink.vue";
import BaseLinkButton from "./base/BaseLinkButton.vue";

export default defineComponent({
  components: {
    HomeLink,
    BaseLinkButton,
    IconMenu,
  },
  data() {
    return {};
  },
});
</script>
