<template>
  <div class="ticker" ref="tickerContainer">
    <div class="ticker__content">
      <div
        v-for="item in tickerRepeatCount"
        :key="item"
        class="ticker__group conveyer-text"
        ref="tickerGroup"
        :class="{
          'opposite-direction': direction === 'opposite',
          '-animation': allowAnimation,
        }"
        :style="{ 'animation-duration': tickerSpeed }"
      >
        {{ title }}
        Repeat: {{ tickerRepeatCount }} Speed: {{ tickerSpeed }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    default: "straight",
  },
});

const tickerGroup = ref(null);
const tickerContainer = ref(null);
const tickerGroupWidth = ref(0);

const tickerRepeatCount = ref(3);
onMounted(() => {
  if (tickerGroup.value) {
    tickerGroupWidth.value = tickerGroup.value[0].offsetWidth;
  }
});

const tickerSpeed = ref();
watch(tickerGroupWidth, () => {
  console.log(tickerGroupWidth);

  const msPer100px = 2050;
  const calculatedSpeed = (tickerGroupWidth.value / 100) * msPer100px;
  tickerSpeed.value = `${calculatedSpeed}ms`;
});

const allowAnimation = ref(false);
watch(tickerSpeed, () => {
  if (tickerSpeed.value) {
    nextTick(() => {
      allowAnimation.value = true;
    });
  }
});
</script>

<style scoped>
.conveyer-text {
  font-family: "Grtsk Giga";
  font-weight: 700;
  font-style: italic;
  font-size: 3.611vw;
  line-height: 110%;
  color: var(--color-grey);
  -webkit-text-stroke: 1px var(--text-color);
}

.ticker {
  user-select: none !important;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: #000;
  /* opacity: 0.1; */
  background: red;
}

.ticker__content {
  display: flex;
  align-items: center;
}

.ticker__group {
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 0 1.389vw;
  width: fit-content;
}

.ticker__group.-animation {
  animation: ticker linear infinite;
  animation-play-state: running;
}

.ticker__group.opposite-direction.-animation {
  animation: ticker-opposite linear infinite;
  animation-play-state: running;
}

@keyframes ticker-opposite {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes ticker {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@media screen and (max-width: 1025px) {
  .conveyer-text {
    font-size: clamp(28px, 4.102vw, 42px);
  }

  .ticker__group {
    padding: 0 1.953vw;
  }
}

@media screen and (max-width: 760px) {
}
</style>
