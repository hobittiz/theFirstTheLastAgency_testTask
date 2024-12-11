<script setup>
import HeroTitle from "@/components/HeroTitle.vue";
import TickerContainer from "@/components/Ticker/TickerContainer.vue";
import { useParallax } from "@vueuse/core";
import { ref } from "vue";

const pageContainer = ref(null);
const parallaxData = useParallax(pageContainer);
</script>

<template>
  <main class="main-block" ref="pageContainer">
    <HeroTitle
      :containerParalaxData="parallaxData"
      titleText="Second page example"
      :showreelLink="{
        link: '/',
        name: 'Back to home Back to home',
      }"
    />
    <TickerContainer />
  </main>
</template>

<style scoped>
.main-block {
  padding: 19px;
  position: relative;
  z-index: 1;
  overflow: hidden !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--color-grey);
}
</style>
