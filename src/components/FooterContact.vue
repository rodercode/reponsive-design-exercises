<template>
  <footer class="flex">
    <IconInstagram class="text-primary-color" />
    <IconTwitter class="text-primary-color" />
    <IconYoutube class="text-primary-color" />
    <span>The Nghiem</span>
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
