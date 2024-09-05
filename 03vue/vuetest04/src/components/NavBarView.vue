<template>
  <div>
    <nav class="navbar">
      <div class="toggle">
        <i class="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background: white;
  padding: 16px;
  display: flex;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  .toggle {
    color: skyblue;
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
