<template>
  <!-- FLEX CONTAINER -->
  <div class="p-4" :class="{ 'disable-scroll': isNavOpen}">
    <HeaderMain />
    <SectionHero />
    <FooterContact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import COMPONENTS
import HeaderMain from "../components/HeaderMain.vue";
import SectionHero from "../components/SectionHero.vue";
import FooterContact from "../components/FooterContact.vue";

export default defineComponent({
  components: {
    HeaderMain,
    SectionHero,
    FooterContact,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.disable-scroll {
  height: 100vh;
  overflow-y: hidden;
}
</style>
