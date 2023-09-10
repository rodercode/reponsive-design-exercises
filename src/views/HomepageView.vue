<template>
  <!-- GRID CONTAINER -->
  <div class="grid px-4">
    <MainHeader />
    <main>
      <!-- HEADLINE -->
      <h1 class="mb-4 leading-snug">Collaborate Like Never Before</h1>
      <!-- TEXT BODY -->
      <p class="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
        animi, excepturi quod illo sunt! 
      </p>
      <BaseLinkButton name="Get Started" href="#" />
      <img class="mt-12" src="../assets/img/data-x1.png" alt="">
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import COMPONENTS
import MainHeader from "../components/MainHeader.vue";
import BaseLinkButton from "../components/base/BaseLinkButton.vue";

export default defineComponent({
  components: {
    MainHeader,
    BaseLinkButton,
  },
  data() {
    return {};
  },
});
</script>
