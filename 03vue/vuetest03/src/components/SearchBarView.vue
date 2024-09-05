<template>
  <div class="search-bar">
    <input
      class="inp"
      type="text"
      @input="inputText = $event.target.value"
      placeholder="지역명을 입력하세요"
    />
    <div class="search-icon" @click="emits('search-city', inputText)">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputText = ref("");

const emits = defineEmits();
</script>

<style lang="scss" scoped>
.search-bar {
  height: 60px;
  padding: 10px 16px;
  position: relative;

  .inp {
    border: 0 none;
    outline: 0 none;
    border-bottom: 1px solid #000;
    padding: 10px 16px;
    width: 100%;
    font-size: 18px;
  }

  .search-icon {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 16px;
    cursor: pointer;
  }
}
</style>
