<template>
  <cup-view :cup-data="cupData" />
</template>

<script lang="ts">
import { defineComponent, ref, toRef, watch } from "vue";
import config from "@/config";
import { Cup } from "@/types";
import CupView from "@/components/Cup/components/CupView";

export default defineComponent({
  name: "Cup",
  components: { CupView },
  props: {
    gameIsPlaying: { type: Number, reqiured: true },
  },
  setup(props, { emit }) {
    const cupData = ref<Cup>([]);
    const currentRowIndex = ref(0);
    const currentCeilIndex = ref(Math.floor(config.columnCount / 2) - 1);
    const currentFigure = ref("");
    const currentColor = ref("");
    const hasNext = ref(true);
    const game = ref<number | undefined>(undefined);

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

    const setFigure = (clear?: boolean, oldRowIndex?: number) => {
      const figure = config.figures.find((i) => i.name === currentFigure.value);
      figure?.data.forEach((row: any, y: number) => {
        row.forEach((value: number, x: number) => {
          if (value > 0) {
            const nextRow = cupData.value[currentRowIndex.value + y + 1];
            if (
              !clear &&
              (!nextRow ||
                (nextRow[currentCeilIndex.value + x].color !== null &&
                  (!figure?.data[y + 1] || !figure?.data[y + 1][x])))
            ) {
              hasNext.value = false;
              if (currentRowIndex.value === 0) {
                clearInterval(game.value);
                emit("gameEnd");
              }
            }
            cupData.value[
              oldRowIndex !== undefined
                ? oldRowIndex + y
                : currentRowIndex.value + y
            ][currentCeilIndex.value + x] = clear
              ? { color: null }
              : { color: currentColor.value };
          }
        });
      });
    };

    const addFigureToCup = () => {
      currentRowIndex.value = 0;
      hasNext.value = true;
      currentCeilIndex.value = Math.floor(config.columnCount / 2) - 1;
      currentFigure.value = getRandomFigure().name;
      currentColor.value = getRandomColor();
      setFigure();
    };

    const startGame = () => {
      addFigureToCup();
      game.value = setInterval(() => {
        if (hasNext.value) {
          currentRowIndex.value++;
        } else {
          addFigureToCup();
        }
      }, 500);
    };

    watch(currentRowIndex, (_, oldV) => {
      if (oldV < _) setFigure(true, oldV);
      setFigure();
    });

    watch(toRef(props, "gameIsPlaying"), (gameIsPlaying) => {
      if (gameIsPlaying) {
        startGame();
      }
    });

    return {
      cupData,
    };
  },
});
</script>

<style lang="scss" scoped></style>
