<template>
  <header class="header">
    <LanguagePicker />
    <RouterLink
      to="/"
      class="logo"
      :class="{
        active: readyToAnimate,
      }"
    >
      <img src="/img/logo-bordered.svg" alt="Mozgi events - logo" />
      <div class="logo-mask"></div>
    </RouterLink>
    <div
      class="navigationToggle"
      :class="{
        active: showMobileNavigation,
      }"
      @click="showMobileNavigation = !showMobileNavigation"
    >
      <span></span><span></span>
    </div>
    <nav
      class="navigation"
      :class="{
        active: showMobileNavigation,
      }"
    >
      <div class="navigation_container">
        <RouterLink :to="linkPath" class="left-sided nav-link link-swaping">
          <span class="link-swaping__inner">
            <span class="link-swaping__visible">Where?</span>
            <span class="link-swaping__hidden">Where?</span>
          </span>
          <span class="border"></span>
        </RouterLink>
        <RouterLink :to="linkPath" class="right-sided nav-link link-swaping">
          <span class="link-swaping__inner">
            <span class="link-swaping__visible">What?</span>
            <span class="link-swaping__hidden">What?</span>
          </span>
          <span class="border"></span>
        </RouterLink>
        <RouterLink :to="linkPath" class="bottom-sided nav-link link-swaping">
          <span class="link-swaping__inner">
            <span class="link-swaping__visible">Who?</span>
            <span class="link-swaping__hidden">Who?</span>
          </span>
          <span class="border"></span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import LanguagePicker from "./LanguagePicker.vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();

const showMobileNavigation = ref(false);

const readyToAnimate = ref(false);
const animateLogo = () => {
  nextTick(() => {
    readyToAnimate.value = true;
  });
};

onMounted(() => {
  window.addEventListener("load", animateLogo);
});

onUnmounted(() => {
  window.removeEventListener("load", animateLogo);
});

const linkPath = computed(() => (route.name == "home" ? "/secondPage" : "/"));
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  padding: 1.944vw 1.667vw;
}

.logo {
  display: flex;
  justify-content: center;
  align-content: center;
}
.logo img {
  display: block;
  width: 6.667vw;
  aspect-ratio: 96/46;
  transform: translateZ(0);
}

.logo-mask {
  position: absolute;
  display: block;
  width: 6.667vw;
  aspect-ratio: 96/46;
  transform: translateZ(0);
  -webkit-mask-image: url(/img/logo.svg);
  -webkit-mask-size: contain;
  -webkit-mask-position: center center;
  -webkit-mask-repeat: no-repeat;
}

.logo-mask:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  transform: translateY(100%) translateZ(0);
  transition: transform 0.8s ease;
}

.logo.active .logo-mask:after {
  transform: translate(0);
}

.navigationToggle {
  pointer-events: none;
  opacity: 0;
}

.navigation {
  padding: 1.319vw;
  pointer-events: none;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation_container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.navigation .nav-link {
  position: absolute;
}

.nav-link {
  pointer-events: auto;
  position: relative;
  color: var(--text-color);
  font-family: "Grtsk Giga";
  font-weight: 600;
  font-size: 1.111vw;
}

.nav-link .border {
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  width: 100%;
  height: 0.139vw;
  background: #fff;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.4s;
}

.nav-link .link-swaping__hidden {
  color: #fff;
}

.left-sided {
  left: 0;
  transform: translateX(calc(-50% + 0.556vw)) rotate(-90deg);
}

.right-sided {
  right: 0;
  transform: translateX(calc(50% - 0.556vw)) rotate(90deg);
}

.bottom-sided {
  bottom: 0;
}

@media screen and (hover: hover) {
  .nav-link:hover .border {
    transform-origin: left;
    transform: scaleX(1);
  }
}

@media screen and (max-width: 1025px) {
  .header {
    padding: 16px 17px;
  }

  .logo img,
  .logo-mask {
    width: 80px;
  }

  .navigation {
    padding: 12px 11px;
  }

  .nav-link {
    font-size: 14px;
  }

  .nav-link .border {
    height: 2x;
  }

  .left-sided {
    left: 0;
    transform: translateX(calc(-50% + 7px)) rotate(-90deg);
  }

  .right-sided {
    right: 0;
    transform: translateX(calc(50% - 7px)) rotate(90deg);
  }

  .bottom-sided {
    bottom: 0;
  }
}

@media screen and (max-width: 760px) {
  .logo img,
  .logo-mask {
    width: 53px;
  }

  .navigationToggle {
    pointer-events: auto;
    opacity: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 34px;
    gap: 8px;
    aspect-ratio: 1/1;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: border 0.4s;
  }

  .navigationToggle span {
    height: 1px;
    width: 22px;
    display: block;
    background: #000;
    transition: transform 0.4s;
  }
  .navigationToggle.active {
    border-color: rgba(255, 255, 255, 0.24);
  }

  .navigationToggle.active span:first-child {
    transform: translate(0px, 4px) rotate(45deg);
  }

  .navigationToggle.active span:last-child {
    transform: translate(0px, -5px) rotate(-45deg);
  }

  .nav-link {
    left: auto;
    right: auto;
    bottom: auto;
    position: relative !important;
    transition: opacity 0.4s, transform 0.4s;
  }

  .navigation {
    align-items: flex-start;
    justify-content: flex-end;
  }

  .navigation_container {
    top: 50px;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
  }

  .navigation .nav-link {
    transform: translateX(40%);
    opacity: 0;
    pointer-events: none;
  }

  .navigation.active .nav-link {
    opacity: 1;
    transform: translate(0);
    pointer-events: auto;
  }

  .navigation.active .nav-link {
    transition-delay: calc(var(--index) * 0.05s);
  }

  .navigation.active .nav-link:nth-child(1) {
    --index: 1;
  }

  .navigation.active .nav-link:nth-child(2) {
    --index: 2;
  }

  .navigation.active .nav-link:nth-child(3) {
    --index: 3;
  }
}
</style>
