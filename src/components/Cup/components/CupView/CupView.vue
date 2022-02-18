<template>
  <div class="cup-view">
    <ceil-row
      v-for="(item, index) of cupData"
      :key="`ceil-row-${index}`"
      :row-data="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ceil } from "@/types";
import CeilRow from "@/components/Cup/components/CeilRow";

export default defineComponent({
  name: "CupView",
  components: { CeilRow },
  props: {
    cupData: { type: Array as () => Ceil[][], required: true },
  },
});
</script>

<style lang="scss" scoped>
.cup-view {
  display: grid;
  grid-row-gap: 2px;
  padding: 2px;
  border: 10px solid transparent;
  outline: 1px solid black;
  width: $cup-width;
  height: $cup-height;
  margin: 0 auto;
  background: #fff;
}
</style>
