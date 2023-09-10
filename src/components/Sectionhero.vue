<template>
  <main>
    <!-- TEXT BOX -->
    <div>
      <!-- HEADLINE -->
      <h1 class="mb-4 leading-snug">Collaborate Like Never Before</h1>

      <!-- TEXT BODY -->
      <p class="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
        animi, excepturi quod illo sunt!
      </p>
    </div>

    <BaseLinkButton name="Get Started" href="#" />

    <!-- IMG box -->
    <div>
      <img class="mt-12" src="../assets/img/data-x1.png" alt="" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Import COMPONENTS
import BaseLinkButton from "../components/base/BaseLinkButton.vue";

export default defineComponent({
  components: {
    BaseLinkButton,
  },
  data() {
    return {};
  },
});
</script>
