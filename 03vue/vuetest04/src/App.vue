<template>
  <div class="app-wrap">
    <NavBarView />
    <MainView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBarView from "./components/NavBarView.vue";
import MainView from "./components/MainView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped>
.app-wrap {
  height: 100vh;
}
</style>
