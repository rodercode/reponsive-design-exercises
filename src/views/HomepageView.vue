<template>
  <!-- GRID CONTAINER -->
  <div class="grid p-4">
    <MainHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import COMPONENTS
import MainHeader from "../components/MainHeader.vue";

export default defineComponent({
  components: {
    MainHeader,
  },
  data() {
    return {};
  },
});
</script>
