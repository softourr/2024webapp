<template>
  <div class="main-wrap">
    <SearchBarView />
    <WeatherView />
  </div>
</template>

<script setup>
import SearchBarView from "./SearchBarView.vue";
import WeatherView from "./WeatherView.vue";
</script>

<style lang="scss" scoped>
.main-wrap {
  height: 100%;
}
</style>
