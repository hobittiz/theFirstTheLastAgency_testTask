<template>
  <div class="ticker-container">
    <TickerLine
      class="ticker"
      title="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY"
      style="transform: rotate(180deg)"
    />
    <TickerLine
      class="ticker"
      title="FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY"
    />
  </div>
</template>

<script setup>
import TickerLine from "@/components/Ticker/TickerLine.vue";
import { onMounted } from "vue";

onMounted(() => {
  const updateRotationAngle = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const angle = Math.atan2(-height, width) * (180 / Math.PI);

    document.documentElement.style.setProperty(
      "--rotation-angle",
      `${angle}deg`
    );
  };

  updateRotationAngle();
  window.addEventListener("resize", updateRotationAngle);

  return () => {
    window.removeEventListener("resize", updateRotationAngle);
  };
});
</script>

<style scoped>
.ticker-container {
  position: fixed;
  z-index: -1;
  display: flex;
  width: 150%;
  height: 150%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* transform: rotate(var(--rotation-angle)); */
}

@media screen and (max-width: 760px) {
  .ticker-container {
    width: max(150svh, 150vw);
    height: max(150svh, 150vw);
  }
}
</style>
