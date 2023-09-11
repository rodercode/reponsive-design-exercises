<template>
  <!-- FLEX CONTAINER -->
  <div class="p-4 md:px-12 md:py-8">
    <HeaderMain />
    <div class="max-w-lg m-auto md:max-w-5xl">
      <SectionHero />
      <FooterContact />
    </div>
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
