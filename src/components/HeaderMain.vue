<template>
  <header class="flex justify-between py-6">
    <HomeLink />
    <BtnMenu />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT COMPONENTS
import HomeLink from "./header-main/HomeLink.vue";
import BaseLinkButton from "./base/BaseLinkButton.vue";
import BtnMenu from "./BtnMenu.vue";

export default defineComponent({
  components: {
    HomeLink,
    BaseLinkButton,
    BtnMenu,
  },
  data() {
    return {};
  },
});
</script>
