<template>
  <cup-view :cup-data="cupData" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import config from "@/config";
import { Ceil } from "@/types";
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
    const cupData = ref<Ceil[][]>([]);
    const currentRowIndex = ref(0);
    const currentCeilIndex = ref(Math.floor(config.columnCount / 2));

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
    getRandomFigure();

    const setNewFigure = (figure: string) => {
      switch (figure) {
        case config.figures.O: {
          cupData.value[currentRowIndex.value][currentCeilIndex.value].color =
            "yellow";
          cupData.value[currentRowIndex.value][
            currentCeilIndex.value + 1
          ].color = "yellow";
          cupData.value[currentRowIndex.value + 1][
            currentCeilIndex.value + 1
          ].color = "yellow";
          cupData.value[currentRowIndex.value + 1][
            currentCeilIndex.value
          ].color = "yellow";
          break;
        }
      }
    };
    setNewFigure(config.figures.O);

    return {
      cupData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
