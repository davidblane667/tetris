<template>
  <cup-view :cup-data="cupData" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import config from "@/config";
import { Cup } from "@/types";
import CupView from "@/components/Cup/components/CupView";

export default defineComponent({
  name: "Cup",
  components: { CupView },
  setup() {
    const cupData = ref<Cup>([]);
    const currentRowIndex = ref(0);
    const currentCeilIndex = ref(Math.floor(config.columnCount / 2) - 1);
    const currentFigure = ref("");
    const currentColor = ref("");

    const getStartData = () => {
      const row = [];
      for (let i = 0; i < config.rowCount; i++) {
        const ceil = [];
        for (let j = 0; j < config.columnCount; j++) {
          ceil.push({ color: null });
        }
        row.push(ceil);
      }
      cupData.value = row;
    };
    getStartData();

    const getRandomFigure = () => {
      const enumValues = Object.values(config.figures);
      const randomIndex = Math.floor(Math.random() * enumValues.length);
      return enumValues[randomIndex];
    };

    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * config.colors.length);
      return config.colors[randomIndex];
    };

    const setFigure = (
      clear?: boolean,
      oldRowIndex?: number,
      oldCeilIndex?: number
    ) => {
      const figure = config.figures.find((i) => i.name === currentFigure.value);
      figure?.data.forEach((row: any, y: number) => {
        row.forEach((value: number, x: number) => {
          if (value > 0) {
            cupData.value[oldRowIndex ?? currentRowIndex.value + y][
              oldCeilIndex ?? currentCeilIndex.value + x
            ] = clear ? { color: null } : { color: currentColor.value };
          }
        });
      });
    };

    const addFigureToCup = () => {
      currentRowIndex.value = 0;
      currentCeilIndex.value = Math.floor(config.columnCount / 2) - 1;
      currentFigure.value = getRandomFigure().name;
      currentColor.value = getRandomColor();
      setFigure();
    };

    const startGame = () => {
      addFigureToCup();
      setInterval(() => {
        if (currentRowIndex.value < config.rowCount) {
          currentRowIndex.value++;
        }
      }, 3000);
    };

    startGame();

    watch(currentRowIndex, (_, oldV) => {
      setFigure(true, oldV);
      setFigure();
    });

    return {
      cupData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
