<template>
  <div class="ceil-item"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ceil } from "@/types";

export default defineComponent({
  name: "CeilItem",
  components: {},
  props: {
    ceilData: { type: Object as () => Ceil, required: true },
  },
});
</script>

<style lang="scss" scoped>
.ceil-item {
  width: calc(100% / 10);
  height: 100%;
  outline: 1px solid #000;
}
</style>
