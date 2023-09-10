<template>
  <header class="relative flex justify-between mb-12">
    <HomeLink />
    <nav
      class="text-xl"
      :class="{
        'mobile-nav-open': isNavOpen,
        'mobile-nav-close': true,
      }"
    >
      <ul class="flex flex-col gap-4">
        <NavLink class="text-white" name="Home" />
        <NavLink name="About" />
        <NavLink name="Services" />
        <NavLink name="Contact" />
      </ul>
    </nav>

    <BtnMenu @toggleMenu="changeNavState"  />
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
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    changeNavState() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
.mobile-nav-close {
  background-color: #868e96;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 125%;
  padding: 2.4rem 0rem;

  pointer-events: none;
  transition: all 0.5s ease-in;
  z-index: 100;
  opacity: 0;

  box-shadow: 0 0 0 100vmax #228be6;
  clip-path: inset(0 -100vmax);
  background: #228be6;
}

.mobile-nav-open {
  visibility: visible;
  pointer-events: auto;
  opacity: 1;
}
</style>
