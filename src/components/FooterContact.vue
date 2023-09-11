<template>
  <footer class="flex gap-2 mt-4 text-gray-tint-color">
    <IconInstagram />
    <IconTwitter />
    <IconYoutube />
    <span class="text-sm">The Nghiem</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// IMPORT ICONS
import IconInstagram from "~icons/iconoir/instagram";
import IconTwitter from "~icons/uim/twitter";
import IconYoutube from "~icons/basil/youtube-solid";

export default defineComponent({
  components: {
    IconInstagram,
    IconTwitter,
    IconYoutube,
  },
  data() {
    return {};
  },
});
</script>
