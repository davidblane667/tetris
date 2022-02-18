<template>
  <div class="ceil-item" :style="{ 'background-color': ceilData.color }"></div>
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
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  border-radius: 7px;
}
</style>
