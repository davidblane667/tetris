<template>
  <div class="ceil-row">
    <ceil-item
      v-for="(ceilItem, index) of rowData"
      :key="`ceil-item-${index}`"
      :ceil-data="ceilItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ceil } from "@/types";
import CeilItem from "@/components/Cup/components/CeilItem";

export default defineComponent({
  name: "CeilRow",
  components: { CeilItem },
  props: {
    rowData: { type: Array as () => Ceil[], required: true },
  },
});
</script>

<style lang="scss" scoped>
.ceil-row {
  display: grid;
  grid-template-columns: repeat($column-count, 1fr);
  height: 100%;
  grid-column-gap: 2px;
}
</style>
