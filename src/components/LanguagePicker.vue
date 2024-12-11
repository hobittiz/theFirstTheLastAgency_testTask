<template>
  <div
    class="buble-dropdown"
    :class="{
      active: dropdownisActive,
    }"
    ref="dropdown"
  >
    <div
      class="visible lang-icon"
      @click="dropdownisActive = !dropdownisActive"
    >
      <span><img src="/img/tongue.png" alt="Tongue icon" /></span>
    </div>
    <div class="dropdown">
      <div
        class="lang-icon link-swaping"
        :class="{
          disabled: currentLang == item,
        }"
        v-for="(item, index) in langOptions"
        :key="item"
        :style="`transition-delay: ${index * 100}ms !important`"
        @click="currentLang = item"
      >
        <span class="link-swaping__inner">
          <span class="link-swaping__visible">{{ item }}</span>
          <span class="link-swaping__hidden">{{ item }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const langOptions = ["EN", "UA"];

const currentLang = ref(langOptions[0]);
const dropdownisActive = ref(false);
const dropdown = ref(null);
function handleClickOutside(event) {
  if (
    dropdownisActive.value &&
    dropdown.value &&
    !dropdown.value.contains(event.target)
  ) {
    dropdownisActive.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.buble-dropdown {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.556vw;
  pointer-events: none;
}

.buble-dropdown:after {
  content: "";
  display: block;
  width: 300%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  position: absolute;
}

.buble-dropdown .visible {
  position: relative;
  z-index: 2;
  pointer-events: auto;
}

.lang-icon {
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.639vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0);
  transition: transform 0.4s, opacity 0.4s, background 0.4s;
  overflow: hidden;
  user-select: none;
}

.lang-icon.disabled {
  border-color: rgba(255, 255, 255, 0);
  background: rgba(0, 0, 0, 0.12);
  pointer-events: none !important;
}

.lang-icon:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  display: block;
  transform: translateY(100%);
  background: rgba(255, 255, 255, 0.24);
  transition: transform 0.4s;
}

.lang-icon img {
  display: block;
  width: 1.042vw;
}

.dropdown {
  position: absolute;
  left: calc(100% + 0.556vw);
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.4s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.556vw;
  font-family: "Grtsk Giga";
  font-weight: 700;
  font-size: 0.694vw;
}

.dropdown .lang-icon {
  opacity: 0;
  transform: translateX(-0.556vw);
  transition: transform 0.4s, opacity 0.4s, background 0.4s;
}

@media screen and (hover: hover) {
  .buble-dropdown:hover {
    pointer-events: auto;
  }

  .buble-dropdown:hover .visible {
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .buble-dropdown:hover:after {
    pointer-events: auto;
  }

  .lang-icon:hover {
    border-color: rgba(255, 255, 255, 0);
  }

  .lang-icon:hover img {
    transform: rotateY(360deg);
  }

  .lang-icon:hover:before {
    transform: translate(0);
    /* background: rgba(255, 255, 255, 0.5); */
  }

  .buble-dropdown:hover .dropdown {
    opacity: 1;
    pointer-events: auto;
  }

  .buble-dropdown:hover .dropdown .lang-icon {
    opacity: 1;
    transform: translateX(0);
  }

  .buble-dropdown:hover .visible:before {
    transform: translate(0);
  }
}

@media screen and (max-width: 1024px) {
  .buble-dropdown.active {
    pointer-events: auto;
  }

  .buble-dropdown.active .visible {
    border: 1px solid rgba(255, 255, 255, 0);
  }

  .lang-icon.active img {
    transform: rotateY(360deg);
  }

  .lang-icon.active:before {
    transform: translate(0);
    /* background: rgba(255, 255, 255, 0.5); */
  }

  .buble-dropdown.active .dropdown {
    opacity: 1;
    pointer-events: auto;
  }

  .buble-dropdown.active .dropdown .lang-icon {
    opacity: 1;
    transform: translateX(0);
  }

  .buble-dropdown.active .visible:before {
    transform: translate(0);
  }
}

@media screen and (max-width: 1025px) {
  .buble-dropdown {
    gap: 8px;
  }

  .lang-icon {
    width: 34px;
  }

  .lang-icon img {
    width: 14px;
  }

  .dropdown {
    gap: 8px;
    font-size: 10px;
  }

  .dropdown .lang-icon {
    opacity: 0;
    font-size: 8px;
    transform: translateX(-8px);
    transition: transform 0.4s, opacity 0.4s, background 0.4s;
  }
}

@media screen and (max-width: 760px) {
  .buble-dropdown {
    width: fit-content;
    align-items: flex-start;
    flex-direction: column;
  }

  .dropdown {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    font-size: 10px;
    left: 0;
    top: calc(100% + 8px);
  }

  .dropdown .lang-icon {
    opacity: 0;
    font-size: 8px;
    transform: translateY(-8px);
    transition: transform 0.4s, opacity 0.4s, background 0.4s;
  }
}
</style>
