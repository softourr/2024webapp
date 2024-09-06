<template>
  <div class="appWrap">
    <div v-if="$store.state.modalState">
      <MapModal />
    </div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import MapModal from "./components/MapModal.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped>
.appWrap {
  position: relative;
}
</style>
