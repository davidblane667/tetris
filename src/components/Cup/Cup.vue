<template>
  <cup-view :cup-data="cupData" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import config from "@/config";
import { Ceil } from "@/types";
import CupView from "@/components/Cup/components/CupView";

export default defineComponent({
  name: "Cup",
  components: { CupView },
  setup() {
    const cupData = ref<Ceil[][]>([]);

    const getData = () => {
      const row = [];
      for (let i = 0; i < config.rowCount; i++) {
        const ceil = [];
        for (let j = 0; j < config.ceilCount; j++) {
          ceil.push({ color: null });
        }
        row.push(ceil);
      }
      cupData.value = row;
    };
    getData();

    return {
      cupData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
