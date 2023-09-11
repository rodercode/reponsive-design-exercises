<template>
  <!-- BUTTON LINK -->
  <a
    class="px-8 py-2 lg:text-sm text-base font-bold text-white border-2 rounded-3xl border-primary-color bg-primary-color inline-box hover:bg-primary-tint-color transition duration-500"
    :href="href"
    >{{ name }}</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    href: {
      type: String,
    },
  },
});
</script>
