<template>
  <div :style="bg_color">
    <nav class="navbar">
      <div class="tit">
        <h1>
          <img :src="`https://openweathermap.org/img/wn/02d.png`" alt="" />
        </h1>
        <p>Weather App</p>
      </div>
      <div class="toggle">
        <i class="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import calDayNight from "../utils/calDayNight";

const bg_color = computed(() => ({
  "--bg-color-dynamic": calDayNight ? "skyblue" : "darkblue",
}));
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background: skyblue;
  padding: 16px;
  display: flex;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  .tit {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    gap: 8px;
  }

  .toggle {
    color: white;
    margin-left: auto;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
