<template>
  <!-- BUTTON LINK -->
  <a
    class="px-8 py-2 text-base font-bold text-white border-2 rounded-3xl border-primary-color bg-primary-color inline-box"
    href="#"
    >{{ name }}</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
