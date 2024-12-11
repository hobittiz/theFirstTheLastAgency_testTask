<template>
  <div class="hero">
    <div class="hero-bg"></div>
    <h1 class="hero-title" ref="title" :style="`transform: ${parallaxProp}`">
      {{ titleText }}
    </h1>

    <RouterLink :to="showreelLink.link" class="hero-showreel">
      <svg
        class="circle-label-svg"
        viewBox="0 0 140 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="outerCirclePath"
          d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
          fill="none"
        />

        <text class="svgText" text-anchor="middle" dominant-baseline="middle">
          <textPath href="#outerCirclePath" startOffset="50%">
            {{ showreelLink.name }}
          </textPath>
        </text>
      </svg>
    </RouterLink>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
const title = ref(null);
const props = defineProps({
  containerParalaxData: Object,
  titleText: String,
  showreelLink: Object,
});

const { width: windowWidth } = useWindowSize();
const isPc = computed(() => windowWidth.value > 1025);

const parallaxProp = computed(() => {
  return isPc.value
    ? `translateX(${props.containerParalaxData.tilt.value * 20}px) translateY(${
        props.containerParalaxData.roll.value * -20
      }px)`
    : "";
});
</script>

<style scoped>
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-bg {
  position: absolute;
  display: block;
  z-index: -1;
  width: 40.139vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #ffcb46;
  filter: blur(2.083vw);
}

.hero-title {
  position: relative;
  font-family: "Grtsk Giga";
  font-weight: 700;
  font-size: 5.694vw;
  line-height: 110%;
  text-align: center;
  width: 80%;
  color: var(--text-color);
  text-transform: uppercase;
  transition: 0.05s;
}

.circle-label-svg {
  position: absolute;
  width: 9.028vw;
  aspect-ratio: 1/1;
  display: block;
  transform: rotate(-110deg);
  animation: rotateCircle linear infinite 4.5s;
  animation-play-state: paused;
}

.hero-showreel {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 162%;
  margin-left: 28.6%;
  cursor: pointer;
}

.hero-showreel * {
  pointer-events: none;
}

.hero-showreel:before {
  content: "";
  display: block;
  width: 0.556vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #000;
  transition: transform 0.4s;
}

.hero-showreel:after {
  content: "";
  position: absolute;
  display: block;
  width: 7.778vw;
  aspect-ratio: 1/1;
  pointer-events: auto;
}

.svgText {
  font-family: "Grtsk Giga";
  font-weight: 600;
  font-size: 13.8px;
  fill: #fff;
}

@keyframes rotateCircle {
  0% {
    transform: rotate(-110deg);
  }

  100% {
    transform: rotate(-470deg);
  }
}

@media screen and (hover: hover) {
  .hero-showreel:hover .circle-label-svg {
    animation-play-state: running !important;
  }

  .hero-showreel:hover:before {
    transform: scale(2);
  }
}

@media screen and (max-width: 1025px) {
  .hero-bg {
    width: 482px;
    filter: blur(30px);
  }

  .hero-title {
    font-size: 58px;
  }

  .hero-showreel:before {
    width: 8px;
  }

  .hero-showreel:after,
  .circle-label-svg {
    width: 126px;
  }

  .hero-showreel {
    top: 178%;
    margin-left: 31.74%;
  }
}

@media screen and (max-width: 760px) {
  .hero-bg {
    width: max(294px, 79.459vw);
    filter: blur(20px);
  }

  .hero-title {
    /* font-size: max(34px, 9.189vw); */
    font-size: 34px;
    width: 100%;
    max-width: 420px;
  }

  .hero-showreel:before {
    width: max(6px, 1.622vw);
  }

  .hero-showreel:after,
  .circle-label-svg {
    width: clamp(100px, 27.027vw, 150px);
  }

  .hero-showreel {
    top: clamp(157%, 37.1vw, 190%);
    margin-left: 35.74%;
  }
}
</style>
