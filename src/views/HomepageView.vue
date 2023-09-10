<template>
  <!-- FLEX CONTAINER -->
  <div class="p-4">
    <HeaderMain />
    <SectionHero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import COMPONENTS
import HeaderMain from "../components/HeaderMain.vue";
import SectionHero from "../components/SectionHero.vue";

export default defineComponent({
  components: {
    HeaderMain,
    SectionHero,
  },
  data() {
    return {};
  },
});
</script>
