<template>
  <header class="relative flex justify-between m-auto mb-12 md:mb-32 max-w-7xl">
    <HomeLink />
    <nav
      class="text-xl custom-mobile-nav-close"
      :class="{
        'custom-mobile-nav-open': isNavOpen,
      }"
    >
      <ul class="flex flex-col gap-4 lg:flex-row lg:text-base">
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Services" />
        <NavLink name="Contact" />
      </ul>
    </nav>

    <BtnMenu @toggleMenu="changeNavState" />
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
      this.disableScroll();
    },
    disableScroll() {
      const body = document.querySelector("body") as HTMLElement;
      if (this.isNavOpen) {
        body.classList.add("overflow-hidden");
      } else {
        body.classList.remove("overflow-hidden");
      }
    },
  },
});
</script>
