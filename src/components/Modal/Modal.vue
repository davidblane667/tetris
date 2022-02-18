<template>
  <div class="modal">
    <div class="modal-overlay">
      <div class="modal-wrapper"><slot name="content" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  components: {},
});
</script>

<style lang="scss" scoped>
.modal {
  &-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  &-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 50px 80px;
    border: 5px solid black;
    border-radius: 25px;
  }
}
</style>
