<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="page">
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <transition :name="'slide'" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
/* Add your styles for the transition */
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transform: scaleY(0);
  transform-origin: bottom;
  z-index: 1000;
}

.slide-enter-active,
.slide-leave-active {
  position: relative;
  transition: transform 1s ease;
}

.slide-enter-from:before,
.slide-enter-to:before,
.slide-leave-from:before,
.slide-leave-to:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  z-index: 1500;
  left: 0;
  top: 0;
  transition: transform 0.7s ease-in-out;
}

.slide-enter-from:before {
  transform: scaleX(1);
}

.slide-enter-to:before {
  transform: scaleX(0);
  transform-origin: right;
}

.slide-leave-from:before {
  transform: scaleX(0);
  transform-origin: right;
}

.slide-leave-to:before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
