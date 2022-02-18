<template>
  <cup-view :cup-data="cupData" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import config from "@/config";
import { Cup } from "@/types";
import CupView from "@/components/Cup/components/CupView";

export default defineComponent({
  /*
  1. () Сделать отрисовку остальных фигур.
  2. () Подумать над тем, как можно улучшить отрисовку, чтоб убрать портянку
  3. () Добавить генерацию цветов.
  4. () В функцию setNewFigure добавить сгенеренный цвет
   */
  name: "Cup",
  components: { CupView },
  setup() {
    const cupData = ref<Cup>([]);
    const currentRowIndex = ref(0);
    const currentCeilIndex = ref(Math.floor(config.columnCount / 2) - 1);

    const getData = () => {
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
    getData();

    const getRandomFigure = () => {
      const enumValues = Object.values(config.figures);
      const randomIndex = Math.floor(Math.random() * enumValues.length);
      return enumValues[randomIndex];
    };

    const setNewFigure = () => {
      const figure = getRandomFigure();
      figure?.data.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            cupData.value[currentRowIndex.value + y][
              currentCeilIndex.value + x
            ] = { color: "green" };
          }
        });
      });
    };

    setNewFigure();

    return {
      cupData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
