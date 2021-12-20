<template>
  <div class="main-wrapper"><cup /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cup from "@/components/Cup";

export default defineComponent({
  name: "MainWrapperView",
  components: { Cup },
});
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 20px 40px;
  background: #ccc;
}
</style>
