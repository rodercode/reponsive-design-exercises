<template>
  <header class="flex justify-between py-6">
    <HomeLink />
    <nav class="hidden">
      <ul>
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Services" />
        <NavLink name="Contact" />
      </ul>
    </nav>

    <BtnMenu />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT COMPONENTS
import HomeLink from "./header-main/HomeLink.vue";
import BtnMenu from "./BtnMenu.vue";
import NavLink from "./header-main/NavLink.vue";

export default defineComponent({
  components: {
    HomeLink,
    NavLink,
    BtnMenu,
  },
});
</script>
