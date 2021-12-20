<template>
  <main-wrapper-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainWrapperView from "@/components/MainWrapper";
import "./styles/app.scss";

export default defineComponent({
  name: "App",
  components: { MainWrapperView },
});
</script>
