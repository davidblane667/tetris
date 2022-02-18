<template>
  <div class="main-wrapper">
    <cup :game-is-playing="gameIsPlaying" @game-end="gameIsPlaying = -1" />
    <modal v-if="gameIsPlaying <= 0" class="main-wrapper__modal">
      <template #content>
        <h2 class="main-wrapper__modal-title">{{ title }}</h2>
        <button class="main-wrapper__modal-btn" @click="gameIsPlaying = 1">
          {{ buttonText }}
        </button>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Cup from "@/components/Cup";
import Modal from "@/components/Modal";

export default defineComponent({
  name: "MainWrapperView",
  components: { Cup, Modal },
  setup() {
    const gameIsPlaying = ref(0);
    const title = computed(() =>
      gameIsPlaying.value === -1 ? "Game over:(" : "You wanna play? Let's play!"
    );
    const buttonText = computed(() =>
      gameIsPlaying.value === -1 ? "RESTART" : "START"
    );

    return { gameIsPlaying, title, buttonText };
  },
});
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 20px 40px;
  background: #ccc;
  &__modal {
    text-align: center;
  }
  &__modal-title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  &__modal-btn {
    width: 100%;
    padding: 15px 30px;
    font-size: 45px;
    border: 5px solid black;
    cursor: pointer;
  }
}
</style>
