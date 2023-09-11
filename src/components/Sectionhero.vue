<template>
  
  <!-- GRID CONTAINER -->
  <main class="gap-10 lg:gap-40">
    <!-- TEXT BOX -->
    <div>
      <!-- HEADLINE -->
      <h1 class="mb-4 leading-snug text-gray-shade-color font-semibold">Collaborate Like Never Before</h1>

      <!-- TEXT BODY -->
      <p class="mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
        animi, excepturi quod illo sunt!
      </p>

      <BaseLinkButton name="Get Started" href="#" />
    </div>

    <!-- IMG box -->
    <div>
      <img class="h-full" src="../assets/img/data-x1.png" alt="" />
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

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
}
</style>
