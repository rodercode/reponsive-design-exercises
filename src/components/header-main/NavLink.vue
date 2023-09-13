<template>
  <li class="hover:text-primary-color transition duration-500">
    <a href="#">{{ name }}</a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>
